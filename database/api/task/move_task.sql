\set function_name api.move_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "teamId" integer,
  in "taskStatusId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into task_events values (
        default,
        "taskId",
        'move',
        now(),
        get_person_id(),
        "teamId",
        null,
        "taskStatusId",
        null,
        null,
        null,
        true
      );
      update tasks set task_status_id = "taskStatusId" where task_id = "taskId";
      id = "taskId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `taskId`\n
* `teamId`\n
* `taskStatusId`\n
* `note`\n
\n
Output `id`: the same as `taskId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
