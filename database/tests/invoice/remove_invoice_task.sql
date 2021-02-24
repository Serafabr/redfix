select api.remove_invoice_task(
  :new_invoice_id,
  :new_task_id
), :mutation_ok + 1 as mutation_ok \gset
