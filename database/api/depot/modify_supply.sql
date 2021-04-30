\set function_name api.modify_supply

drop function if exists :function_name;
create or replace function :function_name (
  in "supplyId" integer,
  in "supplySf" text,
  in "NAME" text,
  in "unitId" integer,
  in "supplyCategoryId" integer,
  in "isInternal" boolean,
  out id integer
)
  language plpgsql
  as $$
    begin
      update supplies set
        supply_sf = "supplySf",
        name = "NAME",
        unit_id = "unitId",
        supply_category_id = "supplyCategoryId",
        is_internal = "isInternal"
      where supply_id = "supplyId";
      id = "supplyId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `supplyId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
