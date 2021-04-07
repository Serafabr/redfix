\set function_name api.create_appliance

drop function if exists :function_name;
create or replace function :function_name (
  in "assetSf" text,
  in "name" text,
  in "assetCategoryId" integer,
  in "locationId" integer,
  in "place" text default null,
  in "description" text default null,
  in "manufacturer" text default null,
  in "serialNumber" text default null,
  in "model" text default null,
  in "price" numeric default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      if ("assetCategoryId" <> 1)
        then insert into assets values (
          default,
          "assetSf",
          "name",
          "assetCategoryId",
          "locationId",
          "place",
          "description",
          null,
          null,
          null,
          "manufacturer",
          "serialNumber",
          "model",
          "price"
        ) returning asset_id into id;
        else perform raise_exception(103);
      end if;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'`assetId` of the new asset\n') as new_comment \gset

comment on function :function_name is :'new_comment';
