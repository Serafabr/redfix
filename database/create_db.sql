-- rollback transaction
rollback;

-- set psql variables
\set new_db_name              'db_dev'
\set asset_category_facility  '1'
\set asset_category_electric  '2'
\set asset_category_air       '3'
\set asset_category_hydro     '4'

-- set pg_settings variables
-- "login" to allow inserts (mandatory person_id in some columns)
set cookie.session.person_id to 1;

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
comment on schema api is 'Contain views and functions that define the GraphQL API';
create schema web;
comment on schema web is 'Contain functions that can be executed from specific endpoints of the web server';

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
\i functions/generate_api_documentation.sql
\i functions/get_all_files_uuids.sql
\i functions/get_exception_message.sql
\i functions/insert_files.sql
\i functions/json_coalesce.sql
\i functions/refresh_all_materialized_views.sql
\i functions/update_dashboard.sql

-- create views
\i schema/views/api_docs.sql
\i schema/views/assets_of_task.sql
\i schema/views/quantities.sql

-- json_lists
\i schema/json_lists/get_assets_of_task.sql
\i schema/json_lists/get_events_of_task.sql
\i schema/json_lists/get_files_of_task.sql
\i schema/json_lists/get_supplies_of_task.sql

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
\i api/files/modify_avatar.sql
\i api/files/remove_avatar.sql
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
-- invoice
\i api/invoice/bind_tasks_to_invoice.sql
\i api/invoice/insert_invoice.sql
\i api/invoice/modify_invoice.sql
\i api/invoice/insert_invoice_tasks.sql
\i api/invoice/remove_invoice_task.sql
\i api/invoice/remove_invoice.sql
\i api/invoice/set_invoice_paid.sql
\i api/invoice/set_invoice_unpaid.sql
-- plan
\i api/plan/generate_plan_task.sql
\i api/plan/insert_monitor_read.sql
\i api/plan/insert_monitor.sql
\i api/plan/insert_plan.sql
\i api/plan/insert_task_template.sql
\i api/plan/modify_monitor_read.sql
\i api/plan/modify_monitor.sql
\i api/plan/modify_plan.sql
\i api/plan/modify_task_template.sql
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
\i api/task/approve_proposed_task_supplies.sql
\i api/task/approve_task_supply.sql
\i api/task/cancel_send_task.sql
\i api/task/clone_task.sql
\i api/task/follow_task.sql
\i api/task/insert_task.sql
\i api/task/insert_task_asset.sql
\i api/task/insert_task_note.sql
\i api/task/modify_task.sql
\i api/task/modify_task_note.sql
\i api/task/move_task.sql
\i api/task/propose_task_supply.sql
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
\i api/utilities/insert_caesb_bill.sql
\i api/utilities/insert_ceb_bill_note.sql
\i api/utilities/insert_ceb_bill.sql
\i api/utilities/modify_caesb_bill.sql

-- remove new_comment from psql variables
\unset new_comment

-- create triggers before populate tables
\i triggers/check_delete_supply.sql
\i triggers/check_insert_active_box.sql
\i triggers/check_insert_task_event.sql
\i triggers/check_update_task_event.sql
\i triggers/check_task_project.sql
\i triggers/check_task_supply.sql
-- \i triggers/insert_audit_trail.sql
-- \i triggers/publish_to_channel.sql

-- create rls policies
-- (currently not used)

-- insert administrators, teams, asset categories, facilities and specs
\i samples/administrators.sql
\i samples/asset_categories.sql
\i samples/facilities.sql
\i samples/asset_parents.sql
\i samples/specs.sql
\i samples/caesb_meters.sql
\i samples/ceb_meters.sql
alter sequence persons_person_id_seq restart with 10001;
alter sequence teams_team_id_seq restart with 10001;
alter sequence assets_asset_id_seq restart with 10001;
alter sequence specs_spec_id_seq restart with 10001;

-- create triggers after asset categories
\i triggers/check_asset_location.sql
\i triggers/check_asset_parent.sql

-- commit transaction
commit transaction;

-- create extra indexes
-- \i schema/indexes.sql

-- set ON_ERROR_STOP to off
\set ON_ERROR_STOP off

-- unset psql variables
\i scripts/unset_psql_variables

-- print message
\echo :new_db_name CREATED SUCCESSFULLY.
