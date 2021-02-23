\set function_name api.add_task_to_project

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "projectId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update tasks set project_id = "projectId" where task_id = "taskId";
      id = "projectId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `projectId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
