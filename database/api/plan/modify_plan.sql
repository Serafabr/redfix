\set function_name api.modify_plan

drop function if exists :function_name;
create or replace function :function_name (
  in attributes plans,
  out id integer
)
  language plpgsql
  as $$
    begin
      update plans set (
        name,
        description,
        periodicity_id,
        date_start,
        is_active
      ) = (
        attributes.name,
        attributes.description,
        attributes.periodicity_id,
        attributes.date_start,
        attributes.is_active
      ) where plan_id = attributes.plan_id;
      id = attributes.plan_id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `attributes.planId`\n
* `attributes.name`\n
* `attributes.description`\n
* `attributes.periodicityId`\n
* `attributes.dateStart`\n
* `attributes.isActive`\n
\n
Output `id`: `planId` of the modified plan
';

grant execute on function :function_name to coordinator, supervisor, inspector;
