drop view if exists web.api_privileges;
create or replace view web.api_privileges as
  with api_routines as (
    select
      routine_name,
      case when grantee = 'administrator' then true else false end as administrator,
      case when grantee = 'coordinator' then true else false end as coordinator,
      case when grantee = 'supervisor' then true else false end as supervisor,
      case when grantee = 'inspector' then true else false end as inspector,
      case when grantee = 'employee' then true else false end as employee,
      case when grantee = 'visitor' then true else false end as visitor
      from information_schema.routine_privileges
      where routine_schema = 'api'
  ) select
    routine_name as operation,
    jsonb_build_object(
      'administrator', bool_or(administrator),
      'coordinator', bool_or(coordinator),
      'supervisor', bool_or(supervisor),
      'inspector', bool_or(inspector),
      'employee', bool_or(employee),
      'visitor', bool_or(visitor)
    ) as privileges
  from api_routines
  group by routine_name
  order by routine_name
;
