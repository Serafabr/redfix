\set tested_mutation api.create_supply

select api.create_supply(
  'SF-00001',
  :new_depot_id,
  'Material XYZ',
  7,
  1,
  true
) as new_supply_id \gset

\set all_mutations :all_mutations:tested_mutation,
