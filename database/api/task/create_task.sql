\set function_name api.create_task

drop function if exists :function_name;
create or replace function :function_name (
  in "assets" integer[],
  in "title" text,
  in "description" text,
  in "taskPriorityId" integer,
  in "taskCategoryId" integer,
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
      task_initial_status integer;
    begin

      if array_length("assets", 1) is null
        then perform raise_exception(201);
      end if;

      insert into tasks values (
        default,-- task_id
        now(),
        now(),
        get_person_id(),
        get_person_id(),
        "taskPriorityId",
        "taskCategoryId",
        default,-- task_status_id
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
      ) returning
          task_id,
          task_status_id
          into
          id,
          task_initial_status
      ;

      insert into task_assets select id, unnest("assets");

      insert into task_events values (
        default,
        id,
        'creation',
        now(),
        get_person_id(),
        "teamId",
        null,
        task_initial_status,
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
