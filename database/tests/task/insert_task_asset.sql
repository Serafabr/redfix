select api.insert_task_asset(
  :new_task_id,
  :new_asset_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
