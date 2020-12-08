\set function_name api.modify_supply

drop function if exists :function_name;
create or replace function :function_name (
  in attributes supplies,
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
        attributes.supply_sf,
        attributes.spec_id,
        attributes.qty_initial,
        attributes.price
      ) where s.supply_id = attributes.supply_id
      returning s.supply_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `attributes.supplyId`\n
* `attributes.supplySf`\n
* `attributes.boxId`\n
* `attributes.specId`\n
* `attributes.qtyInitial`\n
* `attributes.price`\n
\n
Output `id`: `supplyId` of the modified supply
';

grant execute on function :function_name to coordinator, supervisor, inspector;
