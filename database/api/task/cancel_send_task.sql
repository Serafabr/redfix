drop function if exists api.cancel_send_task;

create or replace function api.cancel_send_task (
  in event task_events,
  out id integer
)
  language plpgsql
  as $$
    begin

      insert into task_events values (
        default,
        event.task_id,
        'cancel'::task_event_enum,
        now(),
        get_person_id(),
        event.team_id,
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
      ) where task_id = event.task_id;

    end;
  $$
;

comment on function api.cancel_send_task is E'
Input fields (* are mandatory):\n
- event.taskId *\n
- event.teamId *
';
