drop role if exists supervisor;
drop role if exists inspector;
drop role if exists employee;
drop role if exists visitor;
drop role if exists cmms_user;

-- cmms users' roles
create role supervisor with noinherit;
create role inspector with noinherit;
create role employee with noinherit;
create role visitor with noinherit;
create role cmms_user with
  noinherit
  login
  password '123456'
  in role supervisor, inspector, employee, visitor
;

comment on role supervisor is 'Servidor da SINFRA';
comment on role inspector is 'Terceirizado da Fiscalização';
comment on role employee is 'Terceirizado da Manutenção';
comment on role visitor is 'Visitante';
