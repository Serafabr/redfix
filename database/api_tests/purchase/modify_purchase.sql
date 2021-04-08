\set tested_mutation api.modify_purchase

select api.modify_purchase(
  :new_purchase_id,
  'Primeiro faturamento de 2021',
  '2021-01-01',
  now()::date,
  'Tarefas t1 e t2 serão faturadas posteriormente'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
