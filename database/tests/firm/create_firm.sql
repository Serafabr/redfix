select api.create_firm(
  'Nome da empresa',
  replace(substr((extract(epoch from now()) * 100000)::text,1,14),'.','')
) as new_firm_id, :mutation_ok + 1 as mutation_ok \gset