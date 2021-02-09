drop view if exists assets_of_task;
create or replace view assets_of_task as
  select
    ta.task_id,
    jsonb_agg(jsonb_build_object(
        'assetId', a.asset_id,
        'assetSf', a.asset_sf,
        'name', a.name
    ) order by a.asset_sf) as assets
  from task_assets as ta
  inner join assets as a using (asset_id)
  group by ta.task_id
;
