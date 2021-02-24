select api.bind_tasks_to_invoice(
  :new_invoice_id,
  :new_depot_id,
  '2021-01-01',
  now()::date
), :mutation_ok + 1 as mutation_ok \gset
