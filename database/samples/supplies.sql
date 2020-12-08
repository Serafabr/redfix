-- supply_id = 1
select api.insert_supply (
  (
    null,-- supply_id
    'M-01',-- supply_sf
    1,-- box_id
    376,-- spec_id
    100,-- qty_initial
    99.99-- price
  )
);
