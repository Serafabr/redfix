select api.modify_task_template(
  :new_task_template_id,
  'Substituição da peça P',
  'Serviço de troca de peça',
  2,
  2,
  :new_plan_id,
  1,
  :new_team_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
