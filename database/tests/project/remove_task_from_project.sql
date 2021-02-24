select api.remove_task_from_project(
  :new_task_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
