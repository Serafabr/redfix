drop view if exists api_docs;
create or replace view api_docs as
  with ops as (
    select
      routine_name::text as operation,
      bool_or(case grantee::text when 'administrator' then true else false end) as administrator,
      bool_or(case grantee::text when 'coordinator' then true else false end) as coordinator,
      bool_or(case grantee::text when 'supervisor' then true else false end) as supervisor,
      bool_or(case grantee::text when 'inspector' then true else false end) as inspector,
      bool_or(case grantee::text when 'employee' then true else false end) as employee,
      bool_or(case grantee::text when 'visitor' then true else false end) as visitor
    from information_schema.routine_privileges
    where routine_schema::text = 'api'
    group by operation
  )
  select
    coalesce(d.objoid,p.oid) as objoid,
    coalesce(d.classoid,c.oid) as classoid,
    coalesce(d.objsubid,0) as objsubid,
    o.operation,
    o.administrator,
    o.coordinator,
    o.supervisor,
    o.inspector,
    o.employee,
    o.visitor,
    coalesce(d.description,'') as description
  from ops as o
  inner join pg_catalog.pg_proc as p on (p.proname::text = o.operation)
  inner join pg_catalog.pg_class as c on (c.relname::text = 'pg_proc')
  -- left join: necessary because only routines with descriptions ("comments")
  -- will be in pg_catalog.pg_description table
  left join pg_catalog.pg_description as d on (d.objoid = p.oid)
;
