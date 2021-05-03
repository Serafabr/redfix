-- alter owner of schema public
alter schema public owner to administrator;

-- revoke all privileges on the database from all roles
revoke all on database :new_db_name from public, cmms_user, supervisor, inspector, employee, visitor;

-- revoke all privileges on schemas from all roles
revoke all on schema public from public, cmms_user, supervisor, inspector, employee, visitor;
revoke all on schema api from public, cmms_user, supervisor, inspector, employee, visitor;
revoke all on schema web from public, cmms_user, supervisor, inspector, employee, visitor;

-- set strict default privileges on all objects in all schemas for all roles
alter default privileges revoke all on tables from public, cmms_user, supervisor, inspector, employee, visitor;
alter default privileges revoke all on sequences from public, cmms_user, supervisor, inspector, employee, visitor;
alter default privileges revoke all on routines from public, cmms_user, supervisor, inspector, employee, visitor;
alter default privileges revoke all on types from public, cmms_user, supervisor, inspector, employee, visitor;
alter default privileges revoke all on schemas from public, cmms_user, supervisor, inspector, employee, visitor;

-- grant connect on database
grant connect on database :new_db_name to cmms_user;

-- grant usage on schemas
grant usage on schema public to supervisor, inspector, employee, visitor;
grant usage on schema api to supervisor, inspector, employee, visitor;
grant usage on schema web to supervisor, inspector, employee, visitor;

-- set default privileges on objects in public schema
alter default privileges in schema public grant select on tables to supervisor, inspector, employee, visitor;
alter default privileges in schema public grant insert, update, delete on tables to supervisor, inspector, employee;
alter default privileges in schema public grant usage on sequences to supervisor, inspector, employee;
alter default privileges in schema public grant execute on routines to supervisor, inspector, employee, visitor;

-- set default privileges on objects in api schema
-- * api schema only contains views and functions
-- * execute privileges on routines in api schema are granted individually
alter default privileges in schema api grant select on tables to supervisor, inspector, employee, visitor;

-- grant privileges on objects in web schema
-- * web schema only contains functions
-- * execute privilges on routines in web schema are granted individually
