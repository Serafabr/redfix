drop function if exists api.receive_task;

create or replace function api.receive_task (
  in event task_events,
  out id integer
)
  language plpgsql
  as $$
    begin

      insert into task_events values (
        default,
        event.task_id,
        'receive'::task_event_enum,
        now(),
        get_person_id(),
        event.team_id,
        null,
        event.task_status_id,
        null,
        null,
        null,
        true
      ) returning task_id into id;

      update tasks set (
        team_id,
        next_team_id,
        task_status_id
      ) = (
        event.team_id,
        null,
        event.task_status_id
      ) where task_id = event.task_id;

    end;
  $$
;

comment on function api.receive_task is E'
Input fields (* are mandatory):\n
- event.taskId *\n
- event.teamId *\n
- event.taskStatusId *
';
