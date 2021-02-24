select api.remove_invoice_task(
  :new_invoice_id,
  :new_task_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
