\set tested_mutation api.set_allocation_invoice

select api.set_allocation_invoice(
  :new_alloc_id,
  :new_invoice_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
