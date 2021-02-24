select api.clone_task(
  :new_task_id,
  :new_team_id
), :mutation_ok + 1 as mutation_ok \gset
