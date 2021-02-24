select api.approve_proposed_task_supplies(
  :new_task_id,
  array[:new_supply_id::integer]
), :mutation_ok + 1 as mutation_ok \gset
