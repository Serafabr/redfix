\set function_name api.remove_project

drop function if exists :function_name;
create or replace function :function_name (
  in "projectId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      delete from projects where project_id = "projectId" returning project_id into id;
    end;
  $$
;

comment on function :function_name is E'
Input(s) obrigatório(s):\n
* `projectId`\n
\n
Output `id`: `projectId` of the removed project
';

grant execute on function :function_name to coordinator, supervisor, inspector;
