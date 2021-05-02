drop view if exists api_docs cascade;
create or replace view api_docs as
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
  ),
  cmms_roles as (
    select rolname, rolsuper, rolcanlogin from cluster_roles where memberof = 'cmms_user'
  ),
  mutations_1 as (
    select
      r.routine_schema::text as op_schema,
      r.routine_name::text as op_name,
      c.rolname,
      bool_or(c.rolname = r.grantee) as permission_boolean
    from information_schema.routine_privileges as r, cmms_roles as c
    where r.routine_schema::text = 'api'
    group by op_schema, op_name, rolname
  ),
  mutations_2 as (
    select
      op_schema,
      op_name,
      jsonb_object_agg(
        rolname, permission_boolean
      ) as privileges
    from mutations_1
    group by op_schema, op_name
  ),
  mutations_3 as (
    select
      p.oid as objoid,
      c.oid as classoid,
      coalesce(d.objsubid,0) as objsubid,
      case p.provolatile
        when 'v' then 'mutation'
        else 'query'
      end as graphql_operation_type,
      m.op_schema || '.' || m.op_name as operation_name,
      m.privileges,
      coalesce(d.description,'') as description
    from mutations_2 as m
    inner join pg_catalog.pg_proc as p on (p.proname::text = m.op_name)
    inner join pg_catalog.pg_class as c on (c.relname::text = 'pg_proc')
    -- left join: necessary because only objects with descriptions ("comments") exist in pg_description table
    left join pg_catalog.pg_description as d on (d.objoid = p.oid)
  ),
  queries_1 as (
    select
      t.table_schema::text as op_schema,
      t.table_name::text as op_name,
      c.rolname,
      true as permission_boolean
    from information_schema.table_privileges as t, cmms_roles as c
    where table_schema::text = 'api' and privilege_type = 'SELECT' and grantee = 'cmms_user'
    group by op_schema, op_name, rolname
  ),
  queries_2 as (
    select
      op_schema,
      op_name,
      jsonb_object_agg(
        rolname, permission_boolean
      ) as privileges
    from queries_1
    group by op_schema, op_name
  ),
  queries_3 as (
    select
      c.oid as objoid,
      cc.oid as classoid,
      coalesce(d.objsubid,0) as objsubid,
      'query' as graphql_operation_type,
      q.op_schema || '.' || q.op_name as operation_name,
      q.privileges,
      coalesce(d.description,'') as description
    from queries_2 as q
    -- inner join below must avoid duplicate names of relations in public and api namespaces
    inner join pg_catalog.pg_class as c on (c.relname::text = q.op_name and c.relnamespace = (select oid from pg_catalog.pg_namespace where nspname = 'api'))
    inner join pg_catalog.pg_class as cc on (cc.relname::text = 'pg_class')
    -- left join: necessary because only objects with descriptions ("comments") exist in pg_description table
    left join pg_catalog.pg_description as d on (d.objoid = c.oid)
  )
  select * from mutations_3
  union
  select * from queries_3
;

drop view if exists api.api_docs;
create or replace view api.api_docs as
  select
    graphql_operation_type,
    regexp_replace(regexp_replace(initcap(regexp_replace(operation_name,'\.','')),'^Api',''),'_','','g') as graphql_operation_name,
    privileges
  from api_docs
;
