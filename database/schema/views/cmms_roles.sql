drop view if exists cmms_roles;
create or replace view cmms_roles as
  with cluster_roles as (
    select
      r.rolname,
      r.rolsuper,
      r.rolcanlogin,
        (
          select b.rolname
          from pg_catalog.pg_auth_members m
          inner join pg_catalog.pg_roles b on (m.roleid = b.oid)
          where m.member = r.oid
        ) as memberof
    from pg_catalog.pg_roles r
    where r.rolname !~ '^pg_'
    )
  select rolname, rolsuper, rolcanlogin from cluster_roles where memberof = 'cmms_user'
;
