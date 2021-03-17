\set function_name api.delete_project

drop function if exists :function_name;
create or replace function :function_name (
  in "projectId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      delete from projects where project_id = "projectId" returning project_id into id;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`projectId` of the removed project\n') as new_comment \gset

comment on function :function_name is :'new_comment';
