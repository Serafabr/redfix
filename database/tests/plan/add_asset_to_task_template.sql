select api.add_asset_to_task_template(
  :new_task_template_id,
  1001
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset