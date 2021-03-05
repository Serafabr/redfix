select api.add_note_to_task(
  :new_task_id,
  :new_team_id,
  'Mensagem para a tarefa',
  null
) as new_task_event_id, :mutation_ok + 1 as mutation_ok \gset
