\set tested_mutation api.delete_invoice

select api.delete_invoice(
  :invoice_to_be_deleted
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
