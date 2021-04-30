\set tested_mutation api.modify_supply

select api.modify_supply(
  :new_supply_id,
  'SF-99999',
  'Material XYZZYX',
  7,
  1,
  true
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
