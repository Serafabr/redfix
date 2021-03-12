\set tested_mutation api.modify_supply

select api.modify_supply(
  :new_supply_id,
  'M0001',
  :new_box_id,
  376,
  1000,
  99.98
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
