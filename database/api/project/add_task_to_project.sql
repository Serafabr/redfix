\set function_name api.add_task_to_project

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "projectId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update tasks set project_id = "projectId" where task_id = "taskId";
      id = "projectId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `taskId`\n
* `projectId`\n
\n
Output `id`: the same as `projectId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector;
