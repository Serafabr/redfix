\set tested_mutation api.set_invoice_unpaid

select api.set_invoice_unpaid(
  :new_invoice_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
