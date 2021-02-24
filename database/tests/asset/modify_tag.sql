select api.modify_tag(
  :new_tag_id,
  'Comissão Diretora do SF'
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
