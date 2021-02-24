select api.modify_task_note(
  :new_task_event_id,
  'Mensagem editada'
), :mutation_ok + 1 as mutation_ok \gset
