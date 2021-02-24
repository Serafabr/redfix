select api.deactivate_box(
  :new_box_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
