select api.insert_spec(
  'SF-99999',
  'v01',
  'ESPEC. TÉC. INVENTADA',
  1,
  1,
  'un',
  1
) as new_spec_id, :mutation_ok + 1 as mutation_ok \gset
