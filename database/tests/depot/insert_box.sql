select api.insert_box(
  :new_depot_id,
  'Versão Original',
  null,
  'Itens conforme edital'
) as new_box_id, :mutation_ok + 1 as mutation_ok \gset
