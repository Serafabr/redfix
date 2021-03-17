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

create role supervisor in role cmms_user;
create role inspector in role cmms_user;
create role employee in role cmms_user;
create role visitor in role cmms_user;
