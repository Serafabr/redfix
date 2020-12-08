\set function_name api.modify_team

drop function if exists :function_name;
create or replace function :function_name (
  in attributes teams,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update teams set (
        name,
        description
      ) = (
        attributes.name,
        attributes.description
      ) where team_id = attributes.team_id
      returning team_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `attributes.teamId`\n
* `attributes.name`\n
\n
Output `id`: `teamId` of the modified team
';

grant execute on function :function_name to coordinator, supervisor;
