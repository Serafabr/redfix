drop function if exists api.insert_supply;

create or replace function api.insert_supply (
  in attributes supplies,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into supplies as s values (
        default,
        attributes.supply_sf,
        attributes.box_id,
        attributes.spec_id,
        attributes.qty_initial,
        attributes.price
      ) returning s.box_id into id;
    end;
  $$
;

comment on function api.insert_supply is E'
Input fields (* are mandatory):\n
- attributes.supplySf *\n
- attributes.boxId *\n
- attributes.specId *\n
- attributes.qtyInitial *\n
- attributes.price *
';
