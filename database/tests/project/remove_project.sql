select api.remove_project(
  :project_to_be_removed
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
