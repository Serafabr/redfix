\set tested_mutation api.add_allocations_to_invoice

select api.add_allocations_to_invoice(
  array[:new_alloc_id],
  :new_invoice_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
