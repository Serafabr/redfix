drop view if exists api.projects;
create or replace view api.projects as
  select
    p.project_id,
    p.name,
    p.description,
    p.date_start,
    p.date_end,
    p.is_active,
    coalesce_list((
      select jsonb_agg(jsonb_build_object(
        'taskId', t.task_id,
        'title', t.title,
        'taskStatusText', ts.task_status_text,
        'taskPriorityText', tp.task_priority_text,
        'taskCategoryText', tc.task_category_text
      ) order by t.task_id)
      from tasks as t
      inner join task_statuses as ts using (task_status_id)
      inner join task_priorities as tp using (task_priority_id)
      inner join task_categories as tc using (task_category_id)
      where t.project_id = p.project_id
    )) as tasks
  from projects as p
;
