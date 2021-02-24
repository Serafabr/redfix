select api.generate_plan_task(
  :new_task_template_id,
  1
), :mutation_ok + 1 as mutation_ok \gset
