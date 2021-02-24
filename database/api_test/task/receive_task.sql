select api.receive_task(
  :new_task_id,
  1,
  2
), :mutation_ok + 1 as mutation_ok \gset
