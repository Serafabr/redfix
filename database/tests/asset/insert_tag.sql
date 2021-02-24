select api.insert_tag(
  'Comissão Diretora'
) as new_tag_id, :mutation_ok + 1 as mutation_ok \gset
