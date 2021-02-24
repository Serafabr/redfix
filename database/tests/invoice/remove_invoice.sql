select api.remove_invoice(
  :new_invoice_id
), :mutation_ok + 1 as mutation_ok \gset
