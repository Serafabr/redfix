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

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: `projectId` of the removed project\n') as new_comment \gset

comment on function :function_name is :'new_comment';
