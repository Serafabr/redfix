\set tested_mutation api.modify_supply

select api.modify_supply(
  :new_supply_id,
  :new_spec_id,
  1000,
  99.99,
  0.25
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
