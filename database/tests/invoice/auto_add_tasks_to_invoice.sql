select api.auto_add_tasks_to_invoice(
  :new_invoice_id,
  :new_depot_id,
  '2021-01-01',
  now()::date
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
