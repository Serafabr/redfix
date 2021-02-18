drop view if exists api_privileges;
create or replace view api_privileges as
  select
    routine_name as operation,
    bool_or(case when grantee = 'administrator' then true else false end) as administrator,
    bool_or(case when grantee = 'coordinator' then true else false end) as coordinator,
    bool_or(case when grantee = 'supervisor' then true else false end) as supervisor,
    bool_or(case when grantee = 'inspector' then true else false end) as inspector,
    bool_or(case when grantee = 'employee' then true else false end) as employee,
    bool_or(case when grantee = 'visitor' then true else false end) as visitor
  from information_schema.routine_privileges
  where routine_schema = 'api'
  group by operation
;
