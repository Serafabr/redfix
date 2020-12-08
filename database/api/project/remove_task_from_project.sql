\set function_name api.remove_task_from_project

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update tasks set project_id = null where task_id = "taskId";
      id = "taskId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `taskId`\n
\n
Output `id`: the same as `taskId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
