select api.unfollow_task(
  :new_task_id
), :mutation_ok + 1 as mutation_ok \gset
