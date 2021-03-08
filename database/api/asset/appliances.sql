drop view if exists api.appliances;
create or replace view api.appliances as
  select  a.asset_id,
          a.asset_sf,
          a.name,
          a.description,
          a.asset_category_id,
          a.asset_category_text,
          a.location_id,
          a.location_sf,
          a.location_name,
          a.manufacturer,
          a.serial_number,
          a.model,
          a.price,
          -- a.parents,
          a.tasks
  from api.assets as a
  where a.asset_category_id <> :'asset_category_facility'::integer
;
