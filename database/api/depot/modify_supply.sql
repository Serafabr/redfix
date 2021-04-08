\set function_name api.modify_supply

drop function if exists :function_name;
create or replace function :function_name (
  in "supplyId" integer,
  in "specId" integer,
  in "qtyInitial" numeric,
  in "PRICE" numeric,
  in "BDI" numeric,
  out id integer
)
  language plpgsql
  as $$
    begin
      update supplies set
        spec_id = "specId",
        qty_initial = "qtyInitial",
        price = "PRICE",
        bdi = "BDI"
      where supply_id = "supplyId";
      id = "supplyId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`supplyId` of the modified supply\n') as new_comment \gset

comment on function :function_name is :'new_comment';
