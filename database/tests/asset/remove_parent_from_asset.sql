select api.remove_parent_from_asset(
  :new_asset_id,
  103
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
