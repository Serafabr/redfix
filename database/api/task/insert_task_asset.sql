drop function if exists api.insert_task_asset;

create or replace function api.insert_task_asset (
  in task_id integer,
  in asset_id integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into task_assets as ta
        values (
          task_id,
          asset_id
        ) returning ta.task_id into id
      ;
    end;
  $$
;
