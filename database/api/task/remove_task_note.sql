\set function_name api.remove_task_note

drop function if exists :function_name;
create or replace function :function_name (
  in "taskEventId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update task_events set is_visible = false where task_event_id = "taskEventId";
      id = "taskEventId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `taskEventId`\n
\n
Output `id`: the same as `taskEventId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
