\set function_name get_tasks_of_project

drop function if exists :function_name;
create or replace function :function_name (
  in "projectId" integer,
  out list jsonb
)
  language sql
  strict
  stable
  as $$
    select json_coalesce(j.l) as list from (
      select
        jsonb_agg(jsonb_build_object(
          'taskId', t.task_id,
          'title', t.title,
          'taskStatusText', ts.task_status_text,
          'taskPriorityText', tp.task_priority_text,
          'taskCategoryText', tc.task_category_text,
          'progress', t.progress,
          'dateStart', t.date_start,
          'dateEnd', t.date_end,
          'dateLimit', t.date_limit
        ) order by t.task_id) as l
      from tasks as t
      inner join task_statuses as ts using (task_status_id)
      inner join task_priorities as tp using (task_priority_id)
      inner join task_categories as tc using (task_category_id)
      where t.project_id = "projectId"
    ) as j
  $$
;

grant execute on function :function_name to cmms_user;
