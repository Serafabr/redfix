drop view if exists api.the_new_tasks cascade;
create or replace view api.the_new_tasks as
  select
    t.task_id,
    t.created_at,
    t.updated_at,
    t.created_by,
    t.updated_by,
    t.task_priority_id,
    t.task_category_id,
    t.task_template_id,
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
    t.next_team_id,
    t.task_status_id,
    (select y.name as team_name from teams as y where y.team_id = t.team_id),
    (select task_status_text from task_statuses as ts where ts.task_status_id = t.task_status_id),
    (select task_category_text from task_categories as tc where tc.task_category_id = t.task_category_id),
    (select task_priority_text from task_priorities tp where tp.task_priority_id = t.task_priority_id),
    -- p.name as created_by_name,
    -- pp.name as updated_by_name,
    -- pr.name as project_name,
    -- r.title as request_title,
    -- aggregates:
    -- assets
    get_assets_of_task(t.task_id) as assets,
    -- get_events_of_task(t.task_id) as events,
    -- get_supplies_of_task(t.task_id) as supplies,
    get_files_of_task(t.task_id) as files
    -- so.send_options,
    -- mo.move_options,
    -- aa.asset_options
  from tasks as t
  -- inner join task_statuses as ts using (task_status_id)
  -- inner join task_priorities as tp using (task_priority_id)
  -- inner join task_categories as tc using (task_category_id)
  -- inner join teams as q on (q.team_id = t.team_id)
  -- inner join persons as p on (t.created_by = p.person_id)
  -- inner join persons as pp on (t.updated_by = pp.person_id)
  -- left join teams as qq on (qq.team_id = t.next_team_id)
  -- left join projects as pr using (project_id)
  -- left join requests as r using (request_id)
;






-- idea for using 'computed columns' (https://www.graphile.org/postgraphile/computed-columns/)

-- drop function if exists api.the_new_tasks_assets;
-- create or replace function api.the_new_tasks_assets(
--   in t api.the_new_tasks,
--   out asset_id integer,
--   out asset_sf text
-- )
--   returns setof record
--   language sql
--   stable
--   as $$
--     select
--       a.asset_id,
--       a.asset_sf
--     from task_assets as ta
--     inner join assets as a using (asset_id)
--     where ta.task_id = t.task_id
--     order by a.asset_sf desc;
--   $$
-- ;
