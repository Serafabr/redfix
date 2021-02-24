select api.set_invoice_paid(
  :new_invoice_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
