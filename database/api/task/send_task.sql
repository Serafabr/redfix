\set function_name api.send_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "teamId" integer,
  in "nextTeamId" integer,
  in "note" text,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin

      insert into task_events values (
        default,
        "taskId",
        'send',
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

      update tasks set (
        team_id,
        next_team_id
      ) = (
        "teamId",
        "nextTeamId"
      ) where task_id = "taskId";

      id = "taskId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory inputs(s):\n
* `taskId`\n
* `teamId`\n
* `nextTeamId`\n
* `note`\n
\n
Output `id`: the same as `taskId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
