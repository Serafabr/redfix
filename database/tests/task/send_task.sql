\set tested_mutation api.send_task

select api.send_task(
  :new_task_id,
  1,
  :new_team_id,
  'Começar imediatamente.'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
