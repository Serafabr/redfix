drop function if exists api.modify_supply;

create or replace function api.modify_supply (
  in attributes supplies,
  out id integer
)
  language plpgsql
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
      returning s.box_id into id;
    end;
  $$
;

comment on function api.modify_supply is E'
Input fields (* are mandatory):\n
- attributes.supplyId *\n
- attributes.supplySf *\n
- attributes.boxId *\n
- attributes.specId *\n
- attributes.qtyInitial *\n
- attributes.price *
';
