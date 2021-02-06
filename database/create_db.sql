-- rollback transaction
rollback;

-- set psql variables
\set new_db_name              'db_dev'
\set task_initial_status      '1'
\set task_status_threshold    '6'
\set asset_category_facility  '1'
\set asset_category_electric  '2'
\set asset_category_air       '3'
\set asset_category_hydro     '4'
\set insert_ceb_data          false

-- set ON_ERROR_STOP to off
\set ON_ERROR_STOP off

-- connect as administrator to another database to allow "drop database" command
\c postgresql://administrator:123456@localhost:5432/postgres

-- forcefully terminate existing connections to allow "drop database" command
select pg_terminate_backend(pid) from pg_stat_activity where pid <> pg_backend_pid() and datname = :'new_db_name';

-- drop database
drop database if exists :new_db_name;

-- create new database
create database :new_db_name with owner administrator template template0 encoding utf8;

-- connect to the new database as administrator
\c postgresql://administrator:123456@localhost:5432/:new_db_name

-- create extensions
create extension if not exists pgcrypto;

-- create additional schemas
create schema api;
comment on schema api is 'Contains views and functions that turn into the queries and mutations of the GraphQL API';
create schema web;
comment on schema web is 'Contains functions executable from specific routes in the web server';

-- create roles
\i roles/roles.sql

-- set ON_ERROR_STOP to on
\set ON_ERROR_STOP on

-- set client encoding to utf8
\encoding utf8

-- begin transaction
begin transaction;

-- alter default privileges
\i roles/privileges.sql

-- create get_person_id function
\i functions/get_person_id.sql

-- create types
\i schema/types.sql

-- create tables
\i schema/reference_tables.sql
\i schema/tables.sql
\i schema/files_tables.sql
\i schema/utilities.sql

-- create functions
\i functions/authenticate.sql
\i functions/get_all_files_uuids.sql
\i functions/get_api_docs.sql
\i functions/get_exception_message.sql
\i functions/insert_files.sql
\i functions/refresh_all_materialized_views.sql
\i functions/update_dashboard.sql

-- create views
\i schema/views/api_privileges.sql
\i schema/views/quantities.sql

-- create api schema objects
-- asset
\i api/asset/asset_data.sql
\i api/asset/appliance_data.sql
\i api/asset/facility_data.sql
\i api/asset/get_asset_children.sql
\i api/asset/get_asset_parents.sql
\i api/asset/insert_asset_child.sql
\i api/asset/insert_asset_parent.sql
\i api/asset/insert_asset_tag.sql
\i api/asset/insert_asset.sql
\i api/asset/insert_tag.sql
\i api/asset/modify_asset.sql
\i api/asset/modify_tag.sql
\i api/asset/remove_asset_child.sql
\i api/asset/remove_asset_parent.sql
\i api/asset/remove_asset_tag.sql
\i api/asset/remove_tag.sql
\i api/asset/tag_data.sql
-- dashboard
\i api/dashboard/dashboard_data.sql
-- depot
\i api/depot/activate_box.sql
\i api/depot/deactivate_box.sql
\i api/depot/depot_data.sql
\i api/depot/insert_box.sql
\i api/depot/insert_depot.sql
\i api/depot/insert_supply.sql
\i api/depot/modify_box.sql
\i api/depot/modify_depot.sql
\i api/depot/modify_supply.sql
\i api/depot/remove_supply.sql
-- files
\i api/files/insert_asset_files.sql
\i api/files/insert_depot_files.sql
\i api/files/insert_plan_files.sql
\i api/files/insert_project_files.sql
\i api/files/insert_spec_files.sql
\i api/files/insert_task_files.sql
\i api/files/remove_file.sql
-- firm
\i api/firm/insert_firm.sql
\i api/firm/modify_firm.sql
-- options
\i api/options/asset_options.sql
\i api/options/depot_options.sql
\i api/options/insert_task_status.sql
\i api/options/person_options.sql
\i api/options/project_options.sql
\i api/options/spec_options.sql
\i api/options/supply_options.sql
\i api/options/task_options.sql
\i api/options/task_supply_options.sql
\i api/options/team_options.sql
-- plan
\i api/plan/insert_bundle_asset.sql
\i api/plan/insert_bundle_plan.sql
\i api/plan/insert_bundle.sql
\i api/plan/insert_executed_plan.sql
\i api/plan/insert_monitor_read.sql
\i api/plan/insert_monitor.sql
\i api/plan/insert_plan.sql
\i api/plan/modify_bundle.sql
\i api/plan/modify_executed_plan.sql
\i api/plan/modify_monitor_read.sql
\i api/plan/modify_monitor.sql
\i api/plan/modify_plan.sql
\i api/plan/remove_bundle_asset.sql
\i api/plan/remove_bundle_plan.sql
\i api/plan/remove_executed_plan.sql
-- project
\i api/project/activate_project.sql
\i api/project/add_task_to_project.sql
\i api/project/deactivate_project.sql
\i api/project/insert_project.sql
\i api/project/modify_project.sql
\i api/project/project_data.sql
\i api/project/remove_project.sql
\i api/project/remove_task_from_project.sql
-- spec
\i api/spec/insert_price.sql
\i api/spec/insert_spec_version.sql
\i api/spec/insert_spec.sql
\i api/spec/modify_price.sql
\i api/spec/modify_spec_version.sql
\i api/spec/remove_price.sql
\i api/spec/spec_data.sql
-- task
\i api/task/cancel_send_task.sql
\i api/task/clone_task.sql
\i api/task/follow_task.sql
\i api/task/insert_task.sql
\i api/task/insert_task_asset.sql
\i api/task/insert_task_note.sql
\i api/task/insert_task_supply.sql
\i api/task/modify_task.sql
\i api/task/modify_task_note.sql
\i api/task/modify_task_supplies.sql
\i api/task/modify_task_supply.sql
\i api/task/move_task.sql
\i api/task/receive_task.sql
\i api/task/remove_task_asset.sql
\i api/task/remove_task_note.sql
\i api/task/remove_task_supply.sql
\i api/task/send_task.sql
\i api/task/task_data.sql
\i api/task/unfollow_task.sql
-- team
\i api/team/activate_person.sql
\i api/team/activate_team.sql
\i api/team/active_persons.sql
\i api/team/change_password.sql
\i api/team/deactivate_person.sql
\i api/team/deactivate_team.sql
\i api/team/insert_person.sql
\i api/team/insert_team_person.sql
\i api/team/insert_team.sql
\i api/team/modify_person.sql
\i api/team/modify_self.sql
\i api/team/modify_team.sql
\i api/team/person_data.sql
\i api/team/remove_team_person.sql
\i api/team/team_data.sql
-- utilities
\i api/utilities/caesb_data.sql
\i api/utilities/ceb_data.sql
\i api/utilities/insert_ceb_bill_note.sql
\i api/utilities/insert_ceb_bill.sql
\i api/utilities/upsert_caesb_bill.sql

-- create and login with fake user for initial inserts
insert into persons values (0, 'admin', '00000000000', 'admin@admin.com', 'Administrator', '0000', null, crypt('123456', gen_salt('bf', 10)), true, 'administrator');
set local cookie.session.person_id to 0;

-- create triggers before populate tables
\i triggers/check_delete_supply.sql
\i triggers/check_insert_task_event.sql
\i triggers/check_update_task_event.sql
\i triggers/check_task_project.sql
\i triggers/check_task_supply.sql
-- \i triggers/insert_audit_trail.sql

-- create rls policies
-- (currently not used)

-- populate tables with sample data
\i samples/asset_categories.sql
\i samples/facilities.sql
\i samples/asset_parents.sql
\i samples/appliances.sql
\i samples/tags.sql

\i samples/persons.sql
\i samples/teams.sql
\i samples/team_persons.sql

\i samples/projects.sql
\i samples/specs.sql

\i samples/firms.sql

\i samples/depots.sql
\i samples/boxes.sql
\i samples/supplies.sql

\i samples/tasks.sql
\i samples/task_supplies.sql
\i samples/task_files.sql

\i samples/ceb_meters.sql
\if :insert_ceb_data
  \i samples/ceb_bills.sql
\endif 

-- restart sequences
\i functions/restart_sequences.sql

-- create triggers after populate tables
\i triggers/check_asset_location.sql
\i triggers/check_asset_parent.sql
\i triggers/check_insert_active_box.sql
-- \i triggers/publish_to_channel.sql

-- commit transaction
commit transaction;

-- set ON_ERROR_STOP to off
\set ON_ERROR_STOP off

-- refresh materialized views
select web.refresh_all_materialized_views();

-- create extra indexes
\i schema/indexes.sql

-- print message
\echo :new_db_name CREATED SUCCESSFULLY.
