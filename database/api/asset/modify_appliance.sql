\set function_name api.modify_appliance

drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  in "assetSf" text,
  in "NAME" text,
  in "assetCategoryId" integer,
  in "locationId" integer,
  in "PLACE" text default null,
  in "DESCRIPTION" text default null,
  in "MANUFACTURER" text default null,
  in "serialNumber" text default null,
  in "MODEL" text default null,
  in "PRICE" numeric default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      if ("assetCategoryId" <> 1)
        then update assets set
          asset_sf = "assetSf",
          name = "NAME",
          asset_category_id = "assetCategoryId",
          location_id = "locationId",
          place = "PLACE",
          description = "DESCRIPTION",
          manufacturer = "MANUFACTURER",
          serial_number = "serialNumber",
          model = "MODEL",
          price = "PRICE"
        where asset_id = "assetId";
        else perform raise_exception(103);
      end if;
      id = "assetId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'`assetId` of the modified asset\n') as new_comment \gset

comment on function :function_name is :'new_comment';
