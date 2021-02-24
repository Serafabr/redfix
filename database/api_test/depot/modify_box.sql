select api.modify_box(
  :new_box_id,
  'Inicial'
), :mutation_ok + 1 as mutation_ok \gset
