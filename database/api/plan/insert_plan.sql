\set function_name api.insert_plan

drop function if exists :function_name;
create or replace function :function_name (
  in attributes plans,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into plans values (
        default,
        now(),
        now(),
        get_person_id(),
        get_person_id(),
        attributes.name,
        attributes.description,
        attributes.periodicity_id,
        attributes.date_start,
        attributes.is_active
      ) returning plan_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `attributes.name`\n
* `attributes.description`\n
\n
Output `id`: `planId` of the new plan
';

grant execute on function :function_name to coordinator, supervisor, inspector;
