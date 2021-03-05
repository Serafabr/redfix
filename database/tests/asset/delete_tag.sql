select api.delete_tag(
  :tag_to_be_deleted
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
