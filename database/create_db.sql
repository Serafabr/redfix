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
-- \i schema/views/quantities.sql

-- json_lists
\i schema/json_lists/get_reads_of_monitor.sql

\i schema/json_lists/get_assets_of_location.sql
\i schema/json_lists/get_assets_of_task.sql
\i schema/json_lists/get_events_of_task.sql
\i schema/json_lists/get_files_of_asset.sql
\i schema/json_lists/get_monitors_of_asset.sql
\i schema/json_lists/get_files_of_task.sql
\i schema/json_lists/get_prices_of_spec.sql
\i schema/json_lists/get_tasks_of_asset.sql
\i schema/json_lists/get_tasks_of_project.sql

-- create api schema objects
-- asset
\i api/asset/add_child_to_asset.sql
\i api/asset/add_parent_to_asset.sql
\i api/asset/add_tag_to_asset.sql
\i api/asset/appliances.sql
\i api/asset/assets.sql
\i api/asset/create_appliance.sql
\i api/asset/create_asset_note.sql
\i api/asset/create_asset_status_event.sql
\i api/asset/create_asset.sql
\i api/asset/create_tag.sql
\i api/asset/delete_tag.sql
\i api/asset/facilities.sql
\i api/asset/get_asset_children.sql
\i api/asset/get_asset_parents.sql
\i api/asset/modify_appliance.sql
\i api/asset/modify_asset.sql
\i api/asset/modify_tag.sql
\i api/asset/remove_child_from_asset.sql
\i api/asset/remove_parent_from_asset.sql
\i api/asset/remove_tag_from_asset.sql
\i api/asset/tags.sql
-- dashboard
\i api/dashboard/dashboard_data.sql
-- depot
\i api/depot/activate_box.sql
\i api/depot/create_box.sql
\i api/depot/create_depot.sql
\i api/depot/create_price.sql
\i api/depot/create_spec.sql
\i api/depot/create_supply.sql
\i api/depot/deactivate_box.sql
\i api/depot/delete_price.sql
\i api/depot/delete_supply.sql
\i api/depot/modify_box.sql
\i api/depot/modify_depot.sql
\i api/depot/modify_price.sql
\i api/depot/modify_spec.sql
\i api/depot/modify_supply.sql
-- files
\i api/files/delete_avatar.sql
\i api/files/delete_file.sql
\i api/files/modify_avatar.sql
\i api/files/upload_asset_files.sql
\i api/files/upload_depot_files.sql
\i api/files/upload_plan_files.sql
\i api/files/upload_project_files.sql
\i api/files/upload_task_files.sql
-- firm
\i api/firm/create_firm.sql
\i api/firm/modify_firm.sql
-- invoice
\i api/invoice/add_allocations_to_invoice.sql
\i api/invoice/allocations_prices_options.sql
\i api/invoice/approve_allocations.sql
\i api/invoice/create_allocation.sql
\i api/invoice/create_invoice.sql
\i api/invoice/delete_allocations.sql
\i api/invoice/delete_invoice.sql
\i api/invoice/modify_invoice.sql
\i api/invoice/set_invoice_paid.sql
\i api/invoice/set_invoice_unpaid.sql
-- options
\i api/options/asset_options.sql
\i api/options/create_task_status.sql
\i api/options/depot_options.sql
\i api/options/person_options.sql
\i api/options/project_options.sql
\i api/options/team_options.sql
-- plan
\i api/plan/add_asset_to_task_template.sql
\i api/plan/create_monitor_read.sql
\i api/plan/create_monitor.sql
\i api/plan/create_plan.sql
\i api/plan/create_task_from_template.sql
\i api/plan/create_task_template.sql
\i api/plan/modify_monitor_read.sql
\i api/plan/modify_monitor.sql
\i api/plan/modify_plan.sql
\i api/plan/modify_task_template.sql
\i api/plan/remove_asset_from_task_template.sql
-- project
\i api/project/activate_project.sql
\i api/project/add_task_to_project.sql
\i api/project/create_project.sql
\i api/project/deactivate_project.sql
\i api/project/delete_project.sql
\i api/project/modify_project.sql
\i api/project/projects.sql
\i api/project/remove_task_from_project.sql
-- task
\i api/task/add_asset_to_task.sql
\i api/task/cancel_send_task.sql
\i api/task/clone_task.sql
\i api/task/create_task_note.sql
\i api/task/create_task.sql
\i api/task/delete_task_note.sql
-- \i api/task/filter_tasks.sql
\i api/task/follow_task.sql
\i api/task/modify_task_note.sql
\i api/task/modify_task.sql
\i api/task/move_task.sql
\i api/task/receive_task.sql
\i api/task/remove_asset_from_task.sql
\i api/task/send_task.sql
-- \i api/task/tasks.sql
\i api/task/unfollow_task.sql
-- team
\i api/team/activate_person.sql
\i api/team/activate_team.sql
\i api/team/active_persons.sql
\i api/team/add_person_to_team.sql
\i api/team/change_password.sql
\i api/team/create_person.sql
\i api/team/create_team.sql
\i api/team/deactivate_person.sql
\i api/team/deactivate_team.sql
\i api/team/modify_myself.sql
\i api/team/modify_person.sql
\i api/team/modify_team.sql
\i api/team/persons.sql
\i api/team/remove_person_from_team.sql
\i api/team/teams.sql
-- utilities
\i api/utilities/create_energy_bill_note.sql
\i api/utilities/create_energy_bill.sql
\i api/utilities/create_water_bill.sql
\i api/utilities/energy_bills.sql
\i api/utilities/modify_water_bill.sql
\i api/utilities/water_bills.sql

-- remove new_comment from psql variables
\unset new_comment

-- create triggers before populate tables
\i triggers/check_project_is_active.sql
\i triggers/log_data_change.sql
\i triggers/publish_to_channel.sql
\i triggers/validate_box_activation.sql
\i triggers/validate_task_event.sql
\i triggers/verify_task_note_creator.sql




\i triggers/update_quantities.sql

-- create rls policies
-- (currently not used)

-- insert administrators, teams, asset categories, facilities and specs
\i samples/administrators.sql
\i samples/asset_categories.sql
\i samples/facilities.sql
\i samples/asset_parents.sql
\i samples/water_meters.sql
\i samples/energy_meters.sql
alter sequence persons_person_id_seq restart with 10001;
alter sequence teams_team_id_seq restart with 10001;
alter sequence assets_asset_id_seq restart with 10001;

-- create triggers after asset categories
\i triggers/validate_asset_location.sql
\i triggers/validate_asset_parent.sql

-- commit transaction
commit transaction;

-- set ON_ERROR_STOP to off
\set ON_ERROR_STOP off

-- create extra indexes
-- \i schema/indexes.sql

-- unset psql variables
\i scripts/unset_psql_variables

-- print message
\echo :new_db_name CREATED SUCCESSFULLY.
