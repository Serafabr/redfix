\set function_name get_assets_of_location

drop function if exists :function_name;
create or replace function :function_name (
  in "locationId" integer,
  out list jsonb
)
  language sql
  strict
  stable
  as $$
    select coalesce_list(j.l) as list from (
      select
        jsonb_agg(jsonb_build_object(
            'assetId', a.asset_id,
            'assetSf', a.asset_sf,
            'name', a.name
        ) order by a.asset_sf) as l
      from assets as a
      where a.location_id = "locationId"
    ) as j
  $$
;

grant execute on function :function_name to cmms_user;
