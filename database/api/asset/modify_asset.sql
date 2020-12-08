\set function_name api.modify_asset

drop function if exists :function_name;
create or replace function :function_name (
  in attributes assets,
  out id integer
)
  language plpgsql
  as $$
    begin
      update assets as a set (
        asset_sf,
        name,
        description,
        asset_category_id,
        location_id,
        latitude,
        longitude,
        area,
        manufacturer,
        serial_number,
        model,
        price
      ) = (
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
      ) where a.asset_id = attributes.asset_id
      returning a.asset_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `attributes.assetId`\n
* `attributes.assetSf`\n
* `attributes.name`\n
* `attributes.assetCategoryId`\n
* `attributes.locationId`\n
\n
Output `id`: `assetId` of the modified asset
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
