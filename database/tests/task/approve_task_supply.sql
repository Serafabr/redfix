select api.approve_task_supply(
  :new_task_id,
  :new_supply_id,
  2
), :mutation_ok + 1 as mutation_ok \gset
