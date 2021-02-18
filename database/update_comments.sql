with list_of_operations as (
  select
    p.oid as poid,
    d.objoid as doid,
    a.operation,
    d.description,
    a.administrator,
    a.coordinator,
    a.supervisor,
    a.inspector,
    a.employee,
    a.visitor
  from pg_proc as p
  inner join pg_namespace as n on (p.pronamespace = n.oid)
  inner join pg_description as d on (d.objoid = p.oid)
  inner join api_privileges as a on (a.operation = p.proname)
  where n.nspname = 'api'
)
-- select * from api_operations;
update pg_description as pgd set description = (
  select
    l.description ||
    E'\nExecute privilege granted to: \n' ||
    case when l.administrator then E'* administrator\n' else '' end ||
    case when l.coordinator then E'* coordinator\n' else '' end ||
    case when l.supervisor then E'* supervisor\n' else '' end ||
    case when l.inspector then E'* inspector\n' else '' end ||
    case when l.employee then E'* employee\n' else '' end ||
    case when l.visitor then E'* visitor\n' else '' end
)
from list_of_operations as l
where pgd.objoid = l.doid
;