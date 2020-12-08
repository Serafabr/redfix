\set function_name api.cancel_send_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "teamId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin

      insert into task_events values (
        default,
        "taskId",
        'cancel',
        now(),
        get_person_id(),
        "teamId",
        null,
        null,
        null,
        null,
        null,
        true
      ) returning task_id into id;

      update tasks set (
        next_team_id
      ) = row(
        null
      ) where task_id = "taskId";

    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `taskId`\n
* `teamId`\n
\n
Output `id`: the same as `taskId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
