drop function if exists api.insert_task_note;

create or replace function api.insert_task_note (
  in event task_events,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into task_events as te values (
        default,
        event.task_id,
        'note'::task_event_enum,
        now(),
        get_person_id(),
        event.team_id,
        null,
        null,
        event.note,
        event.reply_to,
        null,
        true
      ) returning te.task_id into id;
    end;
  $$
;

comment on function api.insert_task_note is E'
Input fields (* are mandatory):\n
- event.taskId *\n
- event.teamId *\n
- event.replyTo\n
- event.note *
';
