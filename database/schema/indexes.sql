create index on assets (asset_category_id);
create index on asset_parents (asset_id);
create index on asset_tags (tag_id);
create index on boxes (depot_id);
create index on bundle_assets (asset_id);
create index on bundle_plans (plan_id);
-- create index on depots (depot_category_id);
create index on monitors (asset_id);
create index on monitor_reads (monitor_id);
create index on prices (spec_id);
-- create index on specs (spec_category_id);
-- create index on specs (spec_subcategory_id);
create index on spec_files (spec_id);
create index on spec_files (uuid);
create index on supplies (spec_id);
create index on supplies (box_id);
-- create index on tasks (created_at);
-- create index on tasks (request_id);
-- create index on tasks (project_id);
-- create index on tasks (task_category_id);
-- create index on tasks (task_priority_id);
-- create index on tasks (task_status_id);
create index on task_assets (asset_id);
create index on task_events (task_id);
create index on task_files (task_id);
create index on task_files (uuid);
create index on task_supplies (supply_id);
create index on team_persons (person_id);
