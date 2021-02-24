select api.generate_plan_tasks(
  :new_plan_id,
  1
), :mutation_ok + 1 as mutation_ok \gset
