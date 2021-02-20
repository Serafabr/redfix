\set function_name api.insert_task

drop function if exists :function_name;
create or replace function :function_name (
  in "assets" integer[],
  in "title" text,
  in "description" text,
  in "taskPriorityId" integer,
  in "taskCategoryId" integer,
  in "teamId" integer,
  in "planId" integer default null,
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
        then raise exception '%', get_exception_message(201);
      end if;

      insert into tasks values (
        default,
        now(),
        now(),
        get_person_id(),
        get_person_id(),
        "taskPriorityId",
        "taskCategoryId",
        "planId",
        "projectId",
        "title",
        "description",
        "place",
        "progress",
        "dateLimit",
        "dateStart",
        "dateEnd",
        "requestId",
        "teamId",
        null,
        default -- task initial status
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
        'insert',
        now(),
        get_person_id(),
        "teamId",
        "teamId",
        task_initial_status,
        'Criação da tarefa',
        null,
        null,
        true
      );

    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'Output `id`: `taskId` of the new task\n') as new_comment \gset

comment on function :function_name is :'new_comment';
