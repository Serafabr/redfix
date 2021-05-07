drop role if exists administrator;
create role administrator with
  superuser
  createdb
  createrole
  login
  bypassrls
  password '123456'
;
