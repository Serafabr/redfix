\set function_name api.remove_task_file

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "uuid" uuid,
  out id integer
)
  language plpgsql
  strict
  as $$
    declare
      fileuuid uuid;
    begin
      fileuuid = "uuid";
      delete from task_files where task_id = "taskId" and uuid = fileuuid;
      delete from file_metadata where uuid = fileuuid;
      id = "taskId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `taskId`\n
* `uuid`\n
\n
Output `id`: the same as `taskId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
