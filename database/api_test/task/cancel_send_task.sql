select api.cancel_send_task(
  :new_task_id,
  1
), :mutation_ok + 1 as mutation_ok \gset
