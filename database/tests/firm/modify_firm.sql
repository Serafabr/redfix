select api.modify_firm(
  :new_firm_id,
  'Novo nome para a empresa',
  replace(substr((extract(epoch from now()) * 100000)::text,1,14),'.','')
), :mutation_ok + 1 as mutation_ok \gset
