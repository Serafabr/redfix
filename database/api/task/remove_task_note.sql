drop function if exists api.remove_task_note;

create or replace function api.remove_task_note (
  in task_event_id integer,
  out id integer
)
  language plpgsql
  as $$
    declare
      teid integer;
    begin
      teid = task_event_id;
      update task_events as te set (
        is_visible
      ) = row(
        false
      ) where te.task_event_id = teid
      returning te.task_id into id;
    end;
  $$
;

comment on function api.remove_task_note is E'
Input fields (* are mandatory):\n
- taskEventId *
';
