drop view if exists api_privileges;
create or replace view api_privileges as
  with api_routines as (
    select
      routine_name,
      case when grantee = 'administrator' then 'X' else '' end as administrator,
      case when grantee = 'coordinator' then 'X' else '' end as coordinator,
      case when grantee = 'supervisor' then 'X' else '' end as supervisor,
      case when grantee = 'inspector' then 'X' else '' end as inspector,
      case when grantee = 'employee' then 'X' else '' end as employee,
      case when grantee = 'visitor' then 'X' else '' end as visitor
      from information_schema.routine_privileges
      where routine_schema = 'api'
  ) select routine_name,
          string_agg(administrator,'') as administrator,
          string_agg(coordinator,'') as coordinator,
          string_agg(supervisor,'') as supervisor,
          string_agg(inspector,'') as inspector,
          string_agg(employee,'') as employee,
          string_agg(visitor,'') as visitor
  from api_routines
  group by routine_name
  order by routine_name
;
