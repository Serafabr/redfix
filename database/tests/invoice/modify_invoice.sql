\set tested_mutation api.modify_invoice

select api.modify_invoice(
  :new_invoice_id,
  'Primeiro faturamento de 2021',
  '2021-01-01',
  now()::date,
  'Tarefas t1 e t2 serão faturadas posteriormente'
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
