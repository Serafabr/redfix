select api.remove_asset_tag(
  :new_asset_id,
  :new_tag_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
