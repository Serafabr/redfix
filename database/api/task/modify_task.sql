drop function if exists api.modify_task;

create or replace function api.modify_task (
  in attributes tasks,
  -- in assets integer[],
  -- in files_metadata file_metadata[],
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update tasks as t
        set (
          updated_at,
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
          request_id
        ) = (
          now(),
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
          attributes.request_id
        ) where t.task_id = attributes.task_id
        returning t.task_id into id;

      -- with added_assets as (
      --   select unnest(assets) as asset_id
      --   except
      --   select asset_id
      --     from task_assets as ta
      --   where ta.task_id = attributes.task_id
      -- )
      -- insert into task_assets
      --   select attributes.task_id, asset_id from added_assets;

      -- with recursive removed_assets as (
      --   select asset_id
      --     from task_assets as ta
      --   where ta.task_id = attributes.task_id
      --   except
      --   select unnest(assets) as asset_id
      -- )
      -- delete from task_assets as ta
      --   where ta.task_id = attributes.task_id and
      --         asset_id in (select asset_id from removed_assets);

      -- if files_metadata is not null then
      --   select api.insert_task_files(
      --     attributes.task_id,
      --     files_metadata
      --   );
      -- end if;

      -- id = attributes.task_id;

    end;
  $$
;
