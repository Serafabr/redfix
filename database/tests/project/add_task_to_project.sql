select api.add_task_to_project(
  :new_task_id,
  :new_project_id
), :mutation_ok + 1 as mutation_ok \gset
