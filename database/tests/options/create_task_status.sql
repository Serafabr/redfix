\set tested_mutation api.create_task_status

select api.create_task_status(
  'Novo status',
  false
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
