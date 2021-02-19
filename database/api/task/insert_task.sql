\set function_name api.insert_task

drop function if exists :function_name;
create or replace function :function_name (
  in attributes tasks,
  in assets integer[],
  out id integer
)
  language plpgsql
  strict
  as $$
    declare
      task_initial_status integer;
    begin

      if array_length(assets, 1) is null
        then raise exception '%', get_exception_message(201);
      end if;

      insert into tasks values (
        default,
        now(),
        now(),
        get_person_id(),
        get_person_id(),
        attributes.task_priority_id,
        attributes.task_category_id,
        attributes.project_id,
        attributes.title,
        attributes.description,
        attributes.place,
        attributes.progress,
        attributes.date_limit,
        attributes.date_start,
        attributes.date_end,
        attributes.request_id,
        attributes.team_id,
        null,
        default -- task initial status
      ) returning
          task_id,
          task_status_id
          into
          id,
          task_initial_status
      ;

      insert into task_assets select id, unnest(assets);

      insert into task_events values (
        default,
        id,
        'insert',
        now(),
        get_person_id(),
        attributes.team_id,
        attributes.team_id,
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

select generate_api_documentation(
  :'function_name', E'
Mandatory inputs(s):\n
* `attributes.title`\n
* `attributes.taskPriorityId`\n
* `attributes.taskCategoryId`\n
* `attributes.teamId`\n
* `assets`\n
\n
Output `id`: `taskId` of the new task
');
