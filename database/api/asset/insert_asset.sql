\set function_name api.insert_asset

drop function if exists :function_name;
create or replace function :function_name (
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
      insert into assets values (
        default,
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
      ) returning asset_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'`assetId` of the new asset\n') as new_comment \gset

comment on function :function_name is :'new_comment';
