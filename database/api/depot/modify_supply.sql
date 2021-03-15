\set function_name api.modify_supply

drop function if exists :function_name;
create or replace function :function_name (
  in "supplyId" integer,
  in "specId" integer,
  in "qtyInitial" numeric,
  in "price" numeric,
  in "bdi" numeric,
  out id integer
)
  language plpgsql
  as $$
    begin
      update supplies as s set (
        spec_id,
        qty_initial,
        price,
        bdi
      ) = (select new_values.*)
      from (select
        "specId",
        "qtyInitial",
        "price",
        "bdi"
      ) as new_values
      where s.supply_id = "supplyId";
      id = "supplyId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`supplyId` of the modified supply\n') as new_comment \gset

comment on function :function_name is :'new_comment';
