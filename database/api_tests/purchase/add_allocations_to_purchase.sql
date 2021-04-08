\set tested_mutation api.add_allocations_to_purchase

select api.add_allocations_to_purchase(
  array[:new_alloc_id],
  :new_purchase_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
