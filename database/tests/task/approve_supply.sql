\set tested_mutation api.approve_supply

select api.approve_supply(
  :new_task_id,
  :new_supply_id,
  2
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
