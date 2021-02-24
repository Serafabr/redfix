select api.deactivate_project(
  :new_project_id
), :mutation_ok + 1 as mutation_ok \gset
