drop view if exists api.asset_data cascade;
-- cascade because api.facility_data and api.appliance_data depend on api.asset_data
create or replace view api.asset_data as
  select  a.asset_id,
          a.asset_sf,
          a.name,
          a.description,
          ac.asset_category_id,
          ac.asset_category_text,
          a.location_id,
          l.asset_sf as location_sf,
          l.name as location_name,
          a.latitude,
          a.longitude,
          a.area,
          a.manufacturer,
          a.serial_number,
          a.model,
          a.price,
          -- coalesce(p.parents, jsonb_build_array()) as parents,
          coalesce(t.tasks, jsonb_build_array()) as tasks
  from assets as a
  inner join assets as l on (a.location_id = l.asset_id)
  inner join asset_categories as ac on (a.asset_category_id = ac.asset_category_id)
  -- left join (
  --   select  ap.asset_id,
  --           jsonb_agg(jsonb_build_object(
  --             'assetId', a.asset_id,
  --             'assetSf', a.asset_sf,
  --             'name', a.name,
  --             'assetCategoryId', ac.asset_category_id,
  --             'assetCategoryText', ac.asset_category_text
  --           ) order by a.asset_sf) as parents
  --   from asset_parents as ap
  --   inner join assets as a on (ap.parent_id = a.asset_id)
  --   inner join asset_categories as ac on (ac.asset_category_id = a.asset_category_id)
  --   group by ap.asset_id
  -- ) as p on (a.asset_id = p.asset_id)
  left join (
    select  ta.asset_id,
            jsonb_agg(jsonb_build_object(
              'taskId', ta.task_id,
              'taskStatusText', ts.task_status_text,
              'taskPriorityText', tp.task_priority_text,
              'taskCategoryText', tc.task_category_text,
              'title', t.title,
              'dateLimit', t.date_limit
            ) order by ta.task_id desc) as tasks
    from task_assets as ta
    inner join tasks as t using (task_id)
    inner join task_statuses as ts using (task_status_id)
    inner join task_priorities as tp using (task_priority_id)
    inner join task_categories as tc using (task_category_id)
    group by ta.asset_id
  ) as t on (a.asset_id = t.asset_id)
;
