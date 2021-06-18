\set tested_mutation api.modify_task_template

select api.modify_task_template(
  :new_task_template_id,
  'Substituição da peça P',
  'Serviço de troca de peça',
  2,
  2,
  :new_plan_id,
  180,
  :new_team_id,
  array[
    (
      'Atividade inicial',
      false
    )::job_type,
    (
      'Atividade final',
      false
    )::job_type
  ]
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
