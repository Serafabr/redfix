select api.set_invoice_paid(
  :new_invoice_id
), :mutation_ok + 1 as mutation_ok \gset
