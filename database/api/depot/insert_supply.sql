\set function_name api.insert_supply

drop function if exists :function_name;
create or replace function :function_name (
  in attributes supplies,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into supplies as s values (
        default,
        attributes.supply_sf,
        attributes.box_id,
        attributes.spec_id,
        attributes.qty_initial,
        attributes.price
      ) returning s.supply_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `attributes.supplySf`\n
* `attributes.boxId`\n
* `attributes.specId`\n
* `attributes.qtyInitial`\n
* `attributes.price`\n
\n
Output `id`: `supplyId` of the new supply
';

grant execute on function :function_name to coordinator, supervisor, inspector;
