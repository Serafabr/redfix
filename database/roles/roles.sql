drop role if exists supervisor;
drop role if exists inspector;
drop role if exists employee;
drop role if exists visitor;
drop role if exists cmms_user;

-- cmms users' roles
-- cmms_user is used only for login (inside pgPool definition)
create role cmms_user with
  nosuperuser
  nocreatedb
  nocreaterole
  login
  noreplication
  nobypassrls
  password '123456'
  admin administrator
;

create role supervisor noinherit in role cmms_user;
create role inspector noinherit in role cmms_user;
create role employee noinherit in role cmms_user;
create role visitor noinherit in role cmms_user;
