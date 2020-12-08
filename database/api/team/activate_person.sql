\set function_name api.activate_person

drop function if exists :function_name;
create or replace function :function_name (
  in "personId" integer,
  out id integer
)
  language plpgsql
  security definer
  strict
  as $$
    begin
      update persons set is_active = true where person_id = "personId";
      id = "personId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `personId`\n
\n
Output `id`: the same as `personId` input
';

grant execute on function :function_name to coordinator, supervisor;
