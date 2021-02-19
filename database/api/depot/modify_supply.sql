\set function_name api.modify_supply

drop function if exists :function_name;
create or replace function :function_name (
  in "supplyId" integer,
  in "supplySf" text,
  in "boxId" integer,
  in "specId" integer,
  in "qtyInitial" numeric,
  in "price" numeric,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update supplies as s set (
        supply_sf,
        spec_id,
        qty_initial,
        price
      ) = (
        "supplySf",
        "specId",
        "qtyInitial",
        "price"
      ) where s.supply_id = "supplyId";
      id = "supplyId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: `supplyId` of the modified supply\n') as new_comment \gset

comment on function :function_name is :'new_comment';
