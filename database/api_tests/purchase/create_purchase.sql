\set tested_mutation api.create_purchase

select api.create_purchase(
  :new_depot_id,
  'Primeiro faturamento de 2021',
  '2021-01-01',
  now()::date,
  'Tarefas t1 e t2 serão faturadas depois'
) as new_purchase_id \gset

select api.create_purchase(
  :new_depot_id,
  'Faturamento de 2021 criado por engano',
  '2021-01-01',
  now()::date,
  'Tarefas t1 e t2 serão faturadas depois'
) as purchase_to_be_deleted \gset

\set all_mutations :all_mutations:tested_mutation,
