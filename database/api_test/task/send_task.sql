select api.send_task(
  :new_task_id,
  1,
  :new_team_id,
  'Começar imediatamente.'
), :mutation_ok + 1 as mutation_ok \gset
