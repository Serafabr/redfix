-- rollback transaction
rollback;

-- define new database name
\set new_db_name 'db_dev'

-- set ON_ERROR_STOP to off
\set ON_ERROR_STOP off

-- create temporary database
create database temp_db;

-- connect to temporary database
\c temp_db

-- terminate existing connections
select pg_terminate_backend(pid) from pg_stat_activity where pid <> pg_backend_pid() and datname = :'new_db_name';

-- drop database
drop database if exists :new_db_name;

-- create new database
create database :new_db_name with owner postgres;

-- connect to the new database
\c :new_db_name

-- create extensions
create extension if not exists pgcrypto;

-- create additional schemas
create schema private;
create schema api;
create schema web;

-- create roles
\i roles/roles.sql

-- set password for postgres role
alter role postgres with encrypted password '123456';

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

-- create composite types
\i schema/types.sql

-- define db constants
\i functions/get_constant_value.sql

-- create tables
\i schema/reference_tables.sql
\i schema/tables.sql

-- create functions
\i functions/get_asset_trees.sql
\i functions/get_exception_message.sql
\i functions/authenticate.sql
\i functions/get_all_files_uuids.sql
\i functions/refresh_active_boxes.sql
\i functions/refresh_all_materialized_views.sql

-- create views
\i schema/views.sql

-- create materialized views
\i schema/materialized_views.sql

-- create api schema objects
-- task basic
\i api/task/insert_task_files.sql
\i api/task/remove_task_file.sql
\i api/task/task_data.sql
\i api/task/task_form_data.sql
\i api/task/insert_task.sql
\i api/task/modify_task.sql
-- task events
\i api/task/move_task.sql
\i api/task/receive_task.sql
\i api/task/send_task.sql
\i api/task/cancel_send_task.sql
\i api/task/insert_task_note.sql
\i api/task/modify_task_note.sql
\i api/task/remove_task_note.sql
-- task supplies
\i api/task/insert_task_supply.sql
\i api/task/modify_task_supplies.sql
-- task assets
\i api/task/insert_task_asset.sql
\i api/task/remove_task_asset.sql
-- assets
\i api/asset/appliance_data.sql
\i api/asset/asset_form_data.sql
\i api/asset/facility_data.sql
-- depots, boxes, supplies
\i api/depot/depot_data.sql
\i api/depot/insert_box.sql
\i api/depot/insert_depot.sql
\i api/depot/insert_supply.sql
\i api/depot/modify_depot.sql
\i api/depot/modify_supply.sql
\i api/depot/remove_supply.sql
\i api/depot/set_active_box.sql
\i api/depot/unset_active_box.sql
-- specs
\i api/spec/spec_data.sql
-- teams
\i api/team/team_data.sql

-- create and login with fake user for initial inserts
set local cookie.session.person_id to 0;
insert into persons values (0, '00000000000', 'email@email.com', 'Visitor', '0000', null);

-- create triggers before populate tables
\i triggers/check_insert_task_event.sql
\i triggers/check_update_task_event.sql
\i triggers/check_task_supply.sql
-- \i triggers/insert_audit_trail.sql

-- create rls policies
-- \i policies/task_messages.sql

-- populate tables with sample data (using 'INSERT' commands)
\i samples/asset_categories.sql
\i samples/assets.sql
\i samples/asset_relations.sql
-- \i samples/depots.sql
-- \i samples/boxes.sql
\i samples/persons.sql
\i samples/accounts.sql
\i samples/teams.sql
\i samples/team_persons.sql
\i samples/projects.sql
-- \i samples/requests.sql
-- \i samples/tasks.sql
-- \i samples/task_assets.sql
-- \i samples/task_events.sql
-- \i samples/task_files.sql
\i samples/specs.sql
-- \i samples/spec_prices.sql
-- \i samples/supplies.sql
-- \i samples/task_supplies.sql

-- commit transaction
commit transaction;

-- populate tables with sample data (using API)
\i samples/_with_api.sql

-- begin transaction
begin transaction;

-- switch back to person_id = 0
set local cookie.session.person_id to 0;

-- restart sequences
\i samples/_restart_sequences.sql

-- create triggers after populate tables
\i triggers/check_asset.sql
\i triggers/check_asset_relation.sql
-- \i triggers/publish_to_channel.sql

-- commit transaction
commit transaction;

-- set ON_ERROR_STOP to off
\set ON_ERROR_STOP off

-- refresh materialized views
select web.refresh_all_materialized_views();

-- create extra indexes
\i schema/indexes.sql

-- set the default transaction isolation level
-- alter database :new_db_name set default_transaction_isolation to 'serializable';

-- set person_id = 1 (for the upcoming commands in psql)
set cookie.session.person_id to 1;

-- cleanup variable(s)
\unset new_db_name
