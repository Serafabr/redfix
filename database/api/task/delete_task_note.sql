\set function_name api.delete_task_note

drop function if exists :function_name;
create or replace function :function_name (
  in "taskEventId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update task_events set is_visible = false where task_event_id = "taskEventId";
      id = "taskEventId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `taskEventId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
