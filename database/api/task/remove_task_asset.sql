drop function if exists api.remove_task_asset;

create or replace function api.remove_task_asset (
  in task_id integer,
  in asset_id integer,
  out id integer
)
  language plpgsql
  as $$
    declare
      line_count integer;
      assetid integer;
    begin

      id = task_id;
      assetid = asset_id;

      select count(*) into line_count
        from task_assets as ta
      where ta.task_id = id;

      if line_count = 1
        then
          raise exception '%', get_exception_message(1);
        else
          delete from task_assets as ta
            where ta.task_id = id and ta.asset_id = assetid;
      end if;

    end;
  $$
;
