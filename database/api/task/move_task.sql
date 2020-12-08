drop function if exists api.move_task;

create or replace function api.move_task (
  in event task_events,
  out id integer
)
  language plpgsql
  as $$
    begin

    insert into task_events values (
        default,
        event.task_id,
        'move'::task_event_enum,
        now(),
        get_person_id(),
        event.team_id,
        null,
        event.task_status_id,
        event.note,
        null,
        null,
        true
      ) returning task_id into id;

      update tasks set (
        task_status_id
      ) = row(
        event.task_status_id
      ) where task_id = event.task_id;

    end;
  $$
;

comment on function api.move_task is E'
Input fields (* are mandatory):\n
- event.taskId *\n
- event.teamId *\n
- event.taskStatusId *\n
- event.note
';
