\set function_name api.create_task

drop function if exists :function_name;
create or replace function :function_name (
  in "assets" integer[],
  in "title" text,
  in "description" text,
  in "taskPriorityId" integer,
  in "taskCategoryId" integer,
  in "taskStatusId" integer,
  in "teamId" integer,
  in "taskTemplateId" integer default null,
  in "projectId" integer default null,
  in "place" text default null,
  in "progress" integer default null,
  in "dateLimit" date default null,
  in "dateStart" date default null,
  in "dateEnd" date default null,
  in "requestId" integer default null,
  out id integer
)
  language plpgsql
  as $$
    declare
      "personId" constant integer = get_person_id();
      "creatorTeamId" constant integer = get_team_id();
    begin
      if array_length("assets", 1) is null
        then perform raise_exception(201);
      end if;

      insert into tasks values (
        default,-- task_id
        now(),
        now(),
        "personId",
        "personId",
        "taskPriorityId",
        "taskCategoryId",
        "taskStatusId",
        "taskTemplateId",
        "teamId",
        "projectId",
        "title",
        "description",
        "place",
        "progress",
        "dateLimit",
        "dateStart",
        "dateEnd",
        "requestId"
      ) returning task_id into id;

      insert into task_assets select id, unnest("assets");

      insert into task_events values (
        default,
        id,
        'creation',
        now(),
        "personId",
        "creatorTeamId",
        null,
        "taskStatusId",
        'Criação da tarefa',
        null,
        null,
        true
      );

    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'`taskId` of the new task\n') as new_comment \gset

comment on function :function_name is :'new_comment';
