\set tested_mutation api.toggle_purchase_paid

select api.toggle_purchase_paid(
  :new_purchase_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
