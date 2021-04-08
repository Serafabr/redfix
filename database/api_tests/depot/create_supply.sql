\set tested_mutation api.create_supply

select api.create_supply(
  :new_spec_id,
  :new_box_id,
  1000,
  99.99,
  0.20
) as new_supply_id \gset

select api.create_supply(
  :new_spec_id,
  :new_invoice_id,
  100,
  98,
  0.20
) as new_supply_id \gset

select api.create_supply(
  :another_spec_id,
  :new_box_id,
  2000,
  9.99,
  0.20
) as supply_to_be_removed_from_task \gset

select api.create_supply(
  :third_spec_id,
  :new_box_id,
  3000,
  10,
  0.20
) as supply_to_be_deleted \gset

\set all_mutations :all_mutations:tested_mutation,
