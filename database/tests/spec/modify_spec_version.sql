select api.modify_spec_version(
  :new_spec_id,
  'Novo nome da spec',
  1,
  1,
  'un',
  1
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
