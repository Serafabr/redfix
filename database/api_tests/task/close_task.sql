\set tested_mutation api.close_task

select api.close_task(
  :new_task_id,
  'Mensagem para encerrar'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
