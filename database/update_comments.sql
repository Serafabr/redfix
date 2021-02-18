with list_of_operations as (
  select
    d.objoid,
    d.classoid,
    d.objsubid,
    a.operation,
    a.administrator,
    a.coordinator,
    a.supervisor,
    a.inspector,
    a.employee,
    a.visitor,
    d.description
  from api_privileges as a
  inner join pg_catalog.pg_proc as p on (a.operation = p.proname)
  inner join pg_catalog.pg_description as d on (d.objoid = p.oid)
)
-- select * from list_of_operations;
update pg_description as pgd set description = (
  select (
    l.description ||
    E'\nGranted to: \n' ||
    case when l.administrator then E'* administrator\n' else '' end ||
    case when l.coordinator then E'* coordinator\n' else '' end ||
    case when l.supervisor then E'* supervisor\n' else '' end ||
    case when l.inspector then E'* inspector\n' else '' end ||
    case when l.employee then E'* employee\n' else '' end ||
    case when l.visitor then E'* visitor\n' else '' end
  )
)
from list_of_operations as l
where
  pgd.objoid = l.objoid and
  pgd.classoid = l.classoid and
  pgd.objsubid = l.objsubid
;
