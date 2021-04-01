\set tested_mutation api.create_task_template

select api.create_task_template(
  array[:new_asset_id::integer],
  'Substituição da peça P',
  'Serviço de substituição de peça',
  2,
  2,
  :new_plan_id,
  180,
  15,
  :new_team_id
) as new_task_template_id \gset

\set all_mutations :all_mutations:tested_mutation,
