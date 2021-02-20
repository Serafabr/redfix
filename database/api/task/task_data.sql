drop view if exists api.task_data;
create or replace view api.task_data as
  select
    t.task_id,
    t.created_at,
    t.updated_at,
    t.created_by,
    t.updated_by,
    t.task_priority_id,
    t.task_category_id,
    t.plan_id,
    t.project_id,
    t.title,
    t.description,
    t.place,
    t.progress,
    t.date_limit,
    t.date_start,
    t.date_end,
    t.request_id,
    t.team_id,
    q.name as team_name,
    t.next_team_id,
    qq.name as next_team_name,
    t.task_status_id,
    -- aditional data from joins:
    ts.task_status_text,
    tp.task_priority_text,
    tc.task_category_text,
    p.name as created_by_name,
    pp.name as updated_by_name,
    pr.name as project_name,
    r.title as request_title,
    -- aggregates:
    -- assets
    get_assets_of_task(t.task_id) as assets,
    -- json_coalesce((select assets from assets_of_task as a where a.task_id = t.task_id)) as assets,
    -- events
    get_events_of_task(t.task_id) as events,
    -- LIST FROM VIEW
    get_supplies_of_task(t.task_id) as supplies,
    -- LIST FROM VIEW
    get_files_of_task(t.task_id) as files
    -- LIST FROM VIEW
    -- so.send_options,
    -- mo.move_options,
    -- aa.asset_options
  from tasks as t
  inner join task_statuses as ts using (task_status_id)
  inner join task_priorities as tp using (task_priority_id)
  inner join task_categories as tc using (task_category_id)
  inner join teams as q on (q.team_id = t.team_id)
  inner join persons as p on (t.created_by = p.person_id)
  inner join persons as pp on (t.updated_by = pp.person_id)
  left join teams as qq on (qq.team_id = t.next_team_id)
  left join projects as pr using (project_id)
  left join requests as r using (request_id)
;
