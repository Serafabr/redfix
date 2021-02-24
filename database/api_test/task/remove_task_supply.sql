select api.remove_task_supply(
  :new_task_id,
  :new_supply_id
), :mutation + 1 as mutation_ok \gset
