select api.insert_asset_tag(
  :new_asset_id,
  :new_tag_id
),
:mutation_ok + 1 as mutation_ok \gset
