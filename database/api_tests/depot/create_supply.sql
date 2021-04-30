\set tested_mutation api.create_supply

select api.create_supply(
  :new_spec_id,
  :new_depot_id,
  1000,
  99.99,
  0.20
) as new_supply_id \gset

\set all_mutations :all_mutations:tested_mutation,
