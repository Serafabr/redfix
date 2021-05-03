drop role if exists supervisor;
drop role if exists inspector;
drop role if exists employee;
drop role if exists visitor;
drop role if exists cmms_user;

-- cmms users' roles
create role supervisor;
create role inspector;
create role employee;
create role visitor;
create role cmms_user with
  nosuperuser
  nocreatedb
  nocreaterole
  login
  noreplication
  nobypassrls
  password '123456'
  in role supervisor, inspector, employee, visitor
  admin administrator
;