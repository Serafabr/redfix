-- revoke privileges on database and schemas
revoke all on database :new_db_name from public;
revoke all on schema public from public;
revoke all on schema api from public;
revoke all on schema web from public;

-- grant connect on database
grant connect on database :new_db_name to cmms_user;

-- grant usage on schemas
grant usage on schema public to cmms_user;
grant usage on schema api to cmms_user;
grant usage on schema web to cmms_user;

-- change public schema default privileges
alter default privileges in schema public grant usage on sequences to cmms_user;
alter default privileges in schema public grant select on tables to cmms_user;
alter default privileges in schema public grant insert, update, delete on tables to coordinator, supervisor, inspector, employee;
alter default privileges in schema public grant execute on functions to cmms_user;

-- change api schema default privileges
alter default privileges in schema api grant select on tables to cmms_user;
-- "tables" are views in this case (there are no actual tables in api schema)
-- writes do not happen in api schema (only the public schema has tables)
-- insert, update, delete: privileges are granted individually

-- web schema default privileges
-- web schema only contains functions (privileges are granted individually)

-- for lax permissions (only for development or tests), i.e., all roles can do everything, uncomment the following lines:
-- alter default privileges in schema public grant all on sequences to public;
-- alter default privileges in schema public grant all on tables to public;
-- alter default privileges in schema public grant all on functions to public;
-- alter default privileges in schema api grant all on tables to public;
-- alter default privileges in schema api grant all on functions to public;
-- alter default privileges in schema web grant all on functions to public;
