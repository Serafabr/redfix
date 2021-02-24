select api.insert_task_asset(
  :new_task_id,
  :new_asset_id
), :mutation_ok + 1 as mutation_ok \gset
