\set function_name api.insert_supply

drop function if exists :function_name;
create or replace function :function_name (
  in "supplySf" text,
  in "boxId" integer,
  in "specId" integer,
  in "qtyInitial" numeric,
  in "price" numeric
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into supplies as s values (
        default,
        "supplySf",
        "boxId",
        "specId",
        "qtyInitial",
        "price"
      ) returning s.supply_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: `supplyId` of the new supply\n') as new_comment \gset

comment on function :function_name is :'new_comment';
