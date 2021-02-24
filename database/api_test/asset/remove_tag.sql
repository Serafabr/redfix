select api.remove_tag(
  :new_tag_id
), :mutation_ok + 1 as mutation_ok \gset
