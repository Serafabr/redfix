\set tested_mutation api.approve_allocations

select api.approve_allocations(
  array[
    (:new_alloc_id,9)
  ]::alloc_approval[]
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
