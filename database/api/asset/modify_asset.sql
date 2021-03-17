\set function_name api.modify_asset

drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  in "assetSf" text,
  in "name" text,
  in "assetCategoryId" integer,
  in "locationId" integer,
  in "description" text default null,
  in "latitude" numeric default null,
  in "longitude" numeric default null,
  in "area" numeric default null,
  in "manufacturer" text default null,
  in "serialNumber" text default null,
  in "model" text default null,
  in "price" numeric default null,
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
      ) = (select new_values.*)
      from (select
        "assetSf",
        "name",
        "description",
        "assetCategoryId",
        "locationId",
        "latitude",
        "longitude",
        "area",
        "manufacturer",
        "serialNumber",
        "model",
        "price"
      ) as new_values
      where a.asset_id = "assetId";
      id = "assetId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'`assetId` of the modified asset\n') as new_comment \gset

comment on function :function_name is :'new_comment';
