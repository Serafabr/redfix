drop view if exists api_docs;
create or replace view api_docs as
  with mutations as (
    select
      routine_schema::text as op_schema,
      routine_name::text as op_name,
      bool_or(case grantee::text when 'administrator' then true else false end) as administrator,
      bool_or(case grantee::text when 'coordinator' then true else false end) as coordinator,
      bool_or(case grantee::text when 'supervisor' then true else false end) as supervisor,
      bool_or(case grantee::text when 'inspector' then true else false end) as inspector,
      bool_or(case grantee::text when 'employee' then true else false end) as employee,
      bool_or(case grantee::text when 'visitor' then true else false end) as visitor
    from information_schema.routine_privileges
    where routine_schema::text = 'api'
    group by op_schema, op_name
  ),
  mutations_docs as (
    select
      p.oid as objoid,
      c.oid as classoid,
      coalesce(d.objsubid,0) as objsubid,
      case p.provolatile
        when 'v' then 'mutation'
        else 'query'
      end as graphql_operation_type,
      m.op_schema || '.' || m.op_name as operation_name,
      m.administrator,
      m.coordinator,
      m.supervisor,
      m.inspector,
      m.employee,
      m.visitor,
      coalesce(d.description,'') as description
    from mutations as m
    inner join pg_catalog.pg_proc as p on (p.proname::text = m.op_name)
    inner join pg_catalog.pg_class as c on (c.relname::text = 'pg_proc')
    -- left join: necessary because only routines with descriptions ("comments") exist in pg_description table
    left join pg_catalog.pg_description as d on (d.objoid = p.oid)
  ),
  queries as (
    select
      table_schema::text as op_schema,
      table_name::text as op_name,
      true as administrator,
      true as coordinator,
      true as supervisor,
      true as inspector,
      true as employee,
      true as visitor
    from information_schema.table_privileges
    where table_schema::text = 'api' and privilege_type = 'SELECT' and grantee = 'cmms_user'
    group by op_schema, op_name
  ),
  queries_docs as (
    select
      c.oid as objoid,
      cc.oid as classoid,
      coalesce(d.objsubid,0) as objsubid,
      'query' as graphql_operation_type,
      q.op_schema || '.' || q.op_name as operation_name,
      q.administrator,
      q.coordinator,
      q.supervisor,
      q.inspector,
      q.employee,
      q.visitor,
      coalesce(d.description,'') as description
    from queries as q
    inner join pg_catalog.pg_class as c on (c.relname::text = q.op_name)
    inner join pg_catalog.pg_class as cc on (cc.relname::text = 'pg_class')
    left join pg_catalog.pg_description as d on (d.objoid = c.oid)
  )
  select * from mutations_docs
  union
  select * from queries_docs
;
