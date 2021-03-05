select api.create_invoice(
  :new_depot_id,
  'Primeiro faturamento de 2021',
  '2021-01-01',
  now()::date,
  'Tarefas t1 e t2 serão faturadas depois'
) as new_invoice_id, :mutation_ok + 1 as mutation_ok \gset

select api.create_invoice(
  :new_depot_id,
  'Faturamento de 2021 criado por engano',
  '2021-01-01',
  now()::date,
  'Tarefas t1 e t2 serão faturadas depois'
) as invoice_to_be_deleted \gset
