\set function_name api.create_supply

drop function if exists :function_name;
create or replace function :function_name (
  in "specId" integer,
  in "boxId" integer,
  in "qtyInitial" numeric,
  in "price" numeric,
  in "bdi" numeric,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into supplies as s values (
        default,
        "specId",
        "boxId",
        "qtyInitial",
        "price",
        "bdi"
      ) returning s.supply_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`supplyId` of the new supply\n') as new_comment \gset

comment on function :function_name is :'new_comment';
