\set function_name api.clone_task

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "teamId" integer,
  out id integer
)
  language plpgsql
  as $$
    declare
      task_initial_status integer;
    begin
      insert into tasks (
        -- task_id and task_status_id are defaults
        created_at,
        updated_at,
        created_by,
        updated_by,
        task_priority_id,
        task_category_id,
        project_id,
        title,
        description,
        place,
        progress,
        date_limit,
        date_start,
        date_end,
        request_id,
        team_id,
        next_team_id
      ) select
        now(),
        now(),
        get_person_id(),
        get_person_id(),
        t.task_priority_id,
        t.task_category_id,
        t.project_id,
        t.title,
        t.description,
        t.place,
        t.progress,
        t.date_limit,
        t.date_start,
        t.date_end,
        t.request_id,
        "teamId",
        null
      from tasks as t where t.task_id = "taskId"
      returning
          task_id,
          task_status_id
          into
          id,
          task_initial_status
      ;

      insert into task_assets
        select  id,
                ta.asset_id
        from task_assets as ta
      where ta.task_id = "taskId";

      insert into task_events values (
        default,
        id,
        'insert',
        now(),
        get_person_id(),
        "teamId",
        "teamId",
        task_initial_status,
        format('Criada a partir de cópia da tarefa n. %s', "taskId"::text),
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
