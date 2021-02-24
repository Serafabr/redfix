\set function_name api.cancel_send_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "teamId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin

      insert into task_events values (
        default,
        "taskId",
        'cancel',
        now(),
        get_person_id(),
        "teamId",
        null,
        null,
        null,
        null,
        null,
        true
      ) returning task_id into id;

      update tasks set next_team_id = null where task_id = "taskId";

    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
