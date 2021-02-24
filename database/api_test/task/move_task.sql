select api.move_task(
  :new_task_id,
  :new_team_id,
  2
), :mutation_ok + 1 as mutation_ok \gset
