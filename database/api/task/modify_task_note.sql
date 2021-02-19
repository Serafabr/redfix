\set function_name api.modify_task_note

drop function if exists :function_name;
create or replace function :function_name (
  in "taskEventId" integer,
  in "note" text,
  out id integer
)
  language plpgsql
  strict
  as $$
    declare
      new_note alias for "note";
    begin
      update task_events as te set (
        note,
        updated_at
      ) = (
        new_note,
        now()
      ) where te.task_event_id = "taskEventId";
      id = "taskEventId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'Output `id`: `taskEventId` of the modified event\n') as new_comment \gset

comment on function :function_name is :'new_comment';
