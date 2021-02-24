select api.remove_task_note(
  :new_task_event_id
), :mutation_ok + 1 as mutation_ok \gset
