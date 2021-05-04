rollback;

\set ON_ERROR_STOP on

begin transaction;

create index on allocations (supply_id);
create index on allocations (alloc_status_id);
create index on allocations (source_depot_id);
create index on allocations (target_depot_id);
create index on allocations (task_id);

create index on assets (asset_category_id);

create index on asset_events (asset_id);

create index on asset_files (asset_id);
create index on asset_files (uuid);

create index on asset_parents (asset_id);

create index on asset_tags (tag_id);

create index on billings (depot_id);

create index on billing_costs (billing_id);
create index on billing_costs (cost_price_id);

create index on costs (depot_id);

create index on cost_prices (cost_id);

create index on depots (depot_category_id);
create index on depots (is_active);
create index on depots (parent_id);
create index on depots (firm_id);

create index on depot_events (depot_id);

create index on depot_files (depot_id);
create index on depot_files (uuid);

create index on energy_meter_assets (asset_id);

create index on invoices (depot_id);

create index on monitors (asset_id);

create index on monitor_reads (monitor_id);

create index on plans (depot_id);

create index on plan_files (plan_id);
create index on plan_files (uuid);

create index on prices (supply_id);

create index on project_files (project_id);
create index on project_files (uuid);

create index on supplies (depot_id);

create index on supply_prices (supply_id);

create index on tasks (created_at);
create index on tasks (project_id);
create index on tasks (request_id);
create index on tasks (task_category_id);
create index on tasks (task_priority_id);
create index on tasks (task_status_id);
create index on tasks (task_template_id);
create index on tasks (team_id);

create index on task_assets (asset_id);
create index on task_events (task_id);

create index on task_files (task_id);
create index on task_files (uuid);

create index on task_templates (plan_id);

create index on task_template_assets (asset_id);

create index on team_persons (person_id);

create index on water_meter_assets (asset_id);

commit transaction;

\unset ON_ERROR_STOP
