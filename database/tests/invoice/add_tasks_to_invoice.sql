select api.add_tasks_to_invoice(
  :new_invoice_id,
  array[:new_task_id::integer]
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset