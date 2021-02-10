\set function_name api.insert_team

drop function if exists :function_name;
create or replace function :function_name (
  in "name" text,
  in "description" text,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into teams values (
        default,
        "name",
        "description",
        true
      ) returning team_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `name`\n
\n
Output `id`: `teamId` of the new team
';

grant execute on function :function_name to coordinator, supervisor;
