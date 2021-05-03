\set function_name get_tasks_of_asset

drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  out list jsonb
)
  language sql
  strict
  stable
  as $$
    select coalesce_list(j.l) as list from (
      select
        jsonb_agg(jsonb_build_object(
          'taskId', t.task_id,
          'title', t.title,
          'taskStatusText', ts.task_status_text,
          'taskPriorityText', tp.task_priority_text,
          'taskCategoryText', tc.task_category_text
        ) order by t.task_id) as l
      from task_assets as ta
      inner join tasks as t using (task_id)
      inner join task_statuses as ts using (task_status_id)
      inner join task_priorities as tp using (task_priority_id)
      inner join task_categories as tc using (task_category_id)
      where ta.asset_id = "assetId"
    ) as j
  $$
;
