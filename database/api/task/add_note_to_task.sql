\set function_name api.add_note_to_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "teamId" integer,
  in "note" text,
  in "replyTo" integer default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into task_events values (
        default,
        "taskId",
        'note',
        now(),
        get_person_id(),
        "teamId",
        null,
        null,
        "note",
        "replyTo",
        null,
        true
      ) returning task_event_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'`taskEventId` of the new event\n') as new_comment \gset

comment on function :function_name is :'new_comment';
