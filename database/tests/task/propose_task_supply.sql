select api.propose_task_supply(
  :new_task_id,
  :new_supply_id,
  4
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
