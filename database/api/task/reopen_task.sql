\set function_name api.reopen_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "teamId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into task_events values (
        default,
        "taskId",
        'move',
        now(),
        get_person_id(),
        "teamId",
        null,
        7,
        null,
        null,
        null,
        true
      );
      update tasks set task_status_id = 7 where task_id = "taskId";
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
