select api.remove_task_supply(
  :new_task_id,
  :supply_id_to_be_removed_from_task_supplies
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
