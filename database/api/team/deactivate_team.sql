\set function_name api.deactivate_team

drop function if exists :function_name;
create or replace function :function_name (
  in "teamId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update teams set is_active = false where team_id = "teamId";
      id = "teamId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `teamId`\n
\n
Output `id`: the same as `teamId` input
';

grant execute on function :function_name to coordinator, supervisor;
