\set function_name api.deactivate_project

drop function if exists :function_name;
create or replace function :function_name (
  in "projectId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update projects set is_active = false where project_id = "projectId";
      id = "projectId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `projectId`\n
\n
Output `id`: the same as `projectId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector;
