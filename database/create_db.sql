-- rollback transaction
rollback;

-- set psql variables
\i psql_scripts/set_psql_variables.sql

-- set ON_ERROR_STOP to on
\set ON_ERROR_STOP on

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

-- run .psqlrc file
\i configs/.psqlrc

-- create additional schemas
create schema api;
comment on schema api is 'Contain views and functions that define the GraphQL API';
create schema web;
comment on schema web is 'Contain functions that can be executed from specific endpoints of the web server';

-- create roles and define privileges
\i roles/roles.sql
\i roles/privileges.sql
\i roles/person_roles.sql

-- begin transaction
begin transaction;

-- create extensions
create extension if not exists pgcrypto;

-- create exceptions
\i schema/exceptions.sql
\i functions/raise_exception.sql

-- create get_person_id and get_team_id functions
\i functions/get_person_id.sql
\i functions/get_team_id.sql

-- create types
\i schema/types.sql

-- create tables
\i schema/reference_tables.sql
\i schema/tables.sql
\i schema/files_tables.sql
\i schema/utilities.sql

-- create functions
\i functions/authenticate.sql
\i functions/coalesce_list.sql
\i functions/generate_api_documentation.sql
\i functions/get_all_files_uuids.sql
\i functions/insert_files.sql
\i functions/refresh_all_materialized_views.sql
\i functions/update_dashboard.sql

-- create views
\i schema/views/api_docs.sql

-- create triggers
\i triggers/check_project_is_active.sql
\i triggers/log_data_change.sql
\i triggers/publish_to_channel.sql
\i triggers/validate_asset_location.sql
\i triggers/validate_asset_parent.sql
\i triggers/validate_person_team.sql
\i triggers/validate_task_event.sql
\i triggers/verify_task_note_creator.sql

-- create rls policies
-- (currently not used)

-- "login" to allow inserts (mandatory person_id in some columns)
set cookie.session.person_id to 1;

-- insert initial data
\i data/persons.sql
\i data/firms.sql
\i data/asset_categories.sql
\i data/facilities.sql
\i data/asset_parents.sql
\i data/energy_meters.sql
\i data/water_meters.sql
alter sequence persons_person_id_seq restart with 10001;
alter sequence teams_team_id_seq restart with 10001;
alter sequence assets_asset_id_seq restart with 10001;
alter sequence firms_firm_id_seq restart with 10001;

-- commit transaction
commit transaction;

-- create extra indexes
-- \i schema/indexes.sql

-- create api
\i create_api.sql

-- print message
\echo '\nDATABASE CREATED SUCCESSFULLY\n'

-- unset psql variables
\i psql_scripts/unset_psql_variables.sql
