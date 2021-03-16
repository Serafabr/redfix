\set tested_mutation api.approve_allocations

select api.approve_allocations(
  array[
    (:new_alloc_id,1),
    (:alloc_to_be_deleted,0.5)
  ]::allocation_approval[]
) as new_alloc_id \gset

\set all_mutations :all_mutations:tested_mutation,
