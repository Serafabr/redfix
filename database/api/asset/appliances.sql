drop view if exists api.appliances;
create or replace view api.appliances as
  select  a.asset_id,
          a.asset_sf,
          a.name,
          a.description,
          ac.asset_category_id,
          ac.asset_category_text,
          a.location_id,
          l.asset_sf as location_sf,
          l.name as location_name,
          a.manufacturer,
          a.serial_number,
          a.model,
          a.price,
          get_tasks_of_asset(a.asset_id) as tasks
  from assets as a
  inner join assets as l on (a.location_id = l.asset_id)
  inner join asset_categories as ac on (a.asset_category_id = ac.asset_category_id)
  where a.asset_category_id <> :'asset_category_facility'::integer
;