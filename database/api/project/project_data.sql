drop view if exists api.project_data;
create or replace view api.project_data as
  select  p.project_id,
          p.name,
          p.description,
          p.date_start,
          p.date_end,
          p.is_active,
          coalesce(t.tasks, jsonb_build_array())
  from projects as p
  left join (
    select  t.project_id,
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
            ) order by t.task_id desc) as tasks
    from tasks as t
    inner join task_statuses as ts using (task_status_id)
    inner join task_priorities as tp using (task_priority_id)
    inner join task_categories as tc using (task_category_id)
    group by t.project_id
  ) as t using (project_id) 
;
