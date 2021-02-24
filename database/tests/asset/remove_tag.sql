select api.remove_tag(
  :new_tag_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
