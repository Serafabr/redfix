select api.create_spec_version(
  :new_spec_id,
  'v02'
) as new_spec_id, :mutation_ok + 1 as mutation_ok \gset
