\set function_name api.insert_task_status

drop function if exists :function_name;
create or replace function :function_name (
  in "taskStatusText" text,
  in "isLocked" boolean,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into task_statuses values (
        default,
        "taskStatusText",
        "isLocked"
      ) returning task_status_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `taskStatusText`\n
* `isLocked`\n
\n
Output `id`: `taskStatusId` of the new task status
';

grant execute on function :function_name to coordinator, supervisor;
