drop function if exists api.modify_task_note;

create or replace function api.modify_task_note (
  in event task_events,
  out id integer
)
  language plpgsql
  as $$
    begin
      update task_events as te set (
        note,
        updated_at
      ) = row(
        event.note,
        now()
      ) where te.task_event_id = event.task_event_id
      returning te.task_id into id;
    end;
  $$
;

comment on function api.modify_task_note is E'
Input fields (* are mandatory):\n
- event.taskMessageId *\n
- event.note *
';
