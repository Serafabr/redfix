\set tested_mutation api.set_invoice_paid

select api.set_invoice_paid(
  :new_invoice_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
