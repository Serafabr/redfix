\set function_name api.set_task_status

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "teamId" integer,
  in "taskStatusId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into task_events values (
        default,
        "taskId",
        'status',
        now(),
        get_person_id(),
        "teamId",
        null,
        "taskStatusId",
        null,
        null,
        null,
        true
      );
      update tasks set task_status_id = "taskStatusId" where task_id = "taskId";
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
