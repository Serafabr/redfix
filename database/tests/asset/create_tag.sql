select api.create_tag(
  'Comissão Diretora'
) as new_tag_id, :mutation_ok + 1 as mutation_ok \gset

select api.create_tag(
  'Comissão Diretora'
) as tag_to_be_deleted \gset
