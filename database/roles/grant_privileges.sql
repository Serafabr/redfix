-- grant connect on database
grant connect on database :new_db_name to cmms_user;

-- usage on schemas
grant usage on schema public to cmms_user;
grant usage on schema api to cmms_user;
grant usage on schema web to cmms_user;

-- privileges of objects in public schema
alter default privileges in schema public grant select on tables to cmms_user;
alter default privileges in schema public grant insert, update, delete on tables to supervisor, inspector, employee;
alter default privileges in schema public grant usage on sequences to cmms_user;
alter default privileges in schema public grant execute on routines to cmms_user;
alter default privileges in schema public grant usage on types to cmms_user;

-- privileges of objects in api schema
-- * api schema only contains views and functions
-- * execute privileges on routines in api schema are granted individually
alter default privileges in schema api grant select on tables to cmms_user;

-- privileges of objects in web schema
-- * web schema only contains functions
-- * execute privilges on routines in web schema are granted individually
