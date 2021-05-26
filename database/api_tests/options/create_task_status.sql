\set tested_mutation api.create_task_status

select api.create_task_status(
  'Novo status',
  false
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
