select api.insert_invoice_tasks(
  :new_invoice_id,
  array[:new_task_id::integer]
), :mutation_ok + 1 as mutation_ok \gset
