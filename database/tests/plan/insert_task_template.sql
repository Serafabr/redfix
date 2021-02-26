select api.insert_task_template(
  array[:new_asset_id::integer],
  'Substituição da peça P',
  'Serviço de substituição de peça',
  2,
  2,
  :new_plan_id,
  1,
  :new_team_id
) as new_task_template_id, :mutation_ok + 1 as mutation_ok \gset
