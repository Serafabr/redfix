\set tested_mutation api.approve_all_supplies

select api.approve_all_supplies(
  :new_task_id,
  array[:new_supply_id::integer]
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
