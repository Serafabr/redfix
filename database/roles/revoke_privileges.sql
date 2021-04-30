-- revoke privileges on database and schemas
revoke all on database :new_db_name from public;
revoke all on schema public from public;

-- set default privileges
alter default privileges revoke all on tables from public;
alter default privileges revoke all on sequences from public;
alter default privileges revoke all on routines from public;
alter default privileges revoke all on types from public;
alter default privileges revoke all on schemas from public;
