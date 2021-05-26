drop view if exists cmms_roles;
create or replace view cmms_roles as
  with cmms_user_groups as (
    select a.roleid
    from pg_catalog.pg_roles as r
    inner join pg_catalog.pg_auth_members as a on (r.oid = a.member)
    where r.rolname = 'cmms_user'
  )
  select
    r.rolname as role_name,
    d.description
  from cmms_user_groups as g
  inner join pg_catalog.pg_roles as r on (r.oid = g.roleid)
  left join pg_shdescription as d on (r.oid = d.objoid)
  order by r.oid
;

create table person_roles (
  person_role text primary key,
  person_role_text text not null
);

insert into person_roles select c.role_name, c.description from cmms_roles as c;
