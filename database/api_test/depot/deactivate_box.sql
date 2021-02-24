select api.deactivate_box(
  :new_box_id
), :mutation_ok + 1 as mutation_ok \gset
