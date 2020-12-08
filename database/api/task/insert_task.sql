drop function if exists api.insert_task;

create or replace function api.insert_task (
  in attributes tasks,
  in assets integer[],
  in files_metadata file_metadata[],
  out id integer
)
  language plpgsql
  as $$
    begin
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
        get_constant_value('task_initial_status')::integer
      ) returning task_id into id;

      if assets is not null then
        insert into task_assets select id, unnest(assets);
      else
        raise exception '%', get_exception_message(1);
      end if;

      if files_metadata is not null then
        insert into task_files as tf
          select  id,
                  f.filename,
                  f.uuid,
                  f.size,
                  get_person_id(),
                  now()
          from unnest(files_metadata) as f;
      end if;

      insert into task_events values (
        default,
        id,
        'insert'::task_event_enum,
        now(),
        get_person_id(),
        attributes.team_id,
        attributes.team_id,
        get_constant_value('task_initial_status')::integer,
        'Criação da tarefa.',
        null,
        null,
        true
      );

      -- EXAMPLE OF pg_notify USAGE (NECESSARY FOR SUBSCRIPTIONS):
      -- perform pg_notify(
      --   'postgraphile:task_channel',
      --   'Task created by calling api.insert_task function'
      -- );

    end;
  $$
;
