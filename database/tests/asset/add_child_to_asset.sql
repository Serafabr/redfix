select api.add_child_to_asset(
  :new_asset_id,
  104
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
