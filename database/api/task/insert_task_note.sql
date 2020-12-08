\set function_name api.insert_task_note

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "teamId" integer,
  in "replyTo" integer,
  in "note" text,
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

comment on function :function_name is E'
Mandatory inputs(s):\n
* `taskId`\n
* `teamId`\n
* `note`\n
\n
Output `id`: `taskEventId` of the new event
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
