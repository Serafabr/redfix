drop view if exists api.assets;
create or replace view api.assets as
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
          get_tasks_of_asset(a.asset_id) as tasks,
          get_plans_of_asset(a.asset_id) as plans,
          get_monitors_of_asset(a.asset_id) as monitors
  from assets as a
  inner join assets as l on (a.location_id = l.asset_id)
  inner join asset_categories as ac on (a.asset_category_id = ac.asset_category_id)
;
