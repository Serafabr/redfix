\set function_name api.remove_team_person

drop function if exists :function_name;
create or replace function :function_name (
  in "teamId" integer,
  in "personId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      delete from team_persons where team_id = "teamId" and person_id = "personId";
      id = "teamId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `personId`\n
* `teamId`\n
\n
Output `id`: the same as `teamId` input
';

grant execute on function :function_name to coordinator, supervisor;
