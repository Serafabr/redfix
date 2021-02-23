\set function_name api.activate_project

drop function if exists :function_name;
create or replace function :function_name (
  in "projectId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update projects set is_active = true where project_id = "projectId";
      id = "projectId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `projectId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
