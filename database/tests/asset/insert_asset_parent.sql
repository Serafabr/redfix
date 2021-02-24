select api.insert_asset_parent(
  :new_asset_id,
  103
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
