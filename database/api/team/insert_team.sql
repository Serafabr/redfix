\set function_name api.insert_team

drop function if exists :function_name;
create or replace function :function_name (
  in attributes teams,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into teams values (
        default,
        attributes.name,
        attributes.description,
        true
      ) returning team_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `attributes.name`\n
\n
Output `id`: `teamId` of the new team
';

grant execute on function :function_name to coordinator, supervisor;
