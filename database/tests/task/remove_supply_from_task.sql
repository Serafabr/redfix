select api.remove_supply_from_task(
  :new_task_id,
  :supply_to_be_removed_from_task
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset