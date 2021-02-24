select api.send_task(
  :new_task_id,
  :new_team_id,
  1,
  'Começar imediatamente.'
), :mutation_ok + 1 as mutation_ok \gset
