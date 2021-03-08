drop view if exists api.facilities;
create or replace view api.facilities as
  select  a.asset_id,
          a.asset_sf,
          a.name,
          a.description,
          a.asset_category_id,
          a.asset_category_text,
          a.location_id,
          a.location_sf,
          a.location_name,
          a.latitude,
          a.longitude,
          a.area,
          -- a.parents,
          a.tasks
  from api.assets as a
  where a.asset_category_id = :'asset_category_facility'::integer
;
