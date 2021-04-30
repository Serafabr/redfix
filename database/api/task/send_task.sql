\set function_name api.send_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "nextTeamId" integer,
  in "note" text,
  out id integer
)
  language plpgsql
  as $$
    declare
      "teamId" integer = get_team_id();
    begin
      insert into task_events values (
        default,
        "taskId",
        'team',
        now(),
        get_person_id(),
        "teamId",
        "nextTeamId",
        null,
        "note",
        null,
        null,
        true
      );
      update tasks set team_id = "nextTeamId" where task_id = "taskId";
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
