\set tested_mutation api.delete_invoice

select api.delete_invoice(
  :invoice_to_be_deleted
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
