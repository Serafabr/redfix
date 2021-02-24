select api.approve_proposed_task_supplies(
  :new_task_id,
  array[:new_supply_id::integer]
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
