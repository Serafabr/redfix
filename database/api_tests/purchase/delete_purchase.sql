\set tested_mutation api.delete_purchase

select api.delete_purchase(
  :purchase_to_be_deleted
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
