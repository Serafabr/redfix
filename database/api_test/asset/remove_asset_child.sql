select api.remove_asset_child(
  :new_asset_id,
  104
), :mutation_ok + 1 as mutation_ok \gset
