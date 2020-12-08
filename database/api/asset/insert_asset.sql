\set function_name api.insert_asset

drop function if exists :function_name;
create or replace function :function_name (
  in attributes assets,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into assets values (
        default,
        attributes.asset_sf,
        attributes.name,
        attributes.description,
        attributes.asset_category_id,
        attributes.location_id,
        attributes.latitude,
        attributes.longitude,
        attributes.area,
        attributes.manufacturer,
        attributes.serial_number,
        attributes.model,
        attributes.price
      ) returning asset_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `attributes.assetSf`\n
* `attributes.assetCategoryId`\n
* `attributes.locationId`\n
* `attributes.name`\n
\n
Output `id`: `assetId` of the new asset
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
