select api.activate_project(
  :new_project_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
