\set tested_mutation api.propose_supply

select api.propose_supply(
  :new_task_id,
  :new_supply_id,
  4
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

select api.propose_supply(
  :new_task_id,
  :supply_to_be_removed_from_task,
  5
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
