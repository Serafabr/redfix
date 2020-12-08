drop view if exists api.appliance_data;
create or replace view api.appliance_data as
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
  from api.asset_data as a
  where a.asset_category_id <> :'asset_category_facility'::integer
;
