\set tested_mutation api.approve_task_allocations

select api.approve_task_allocations(
  array[
    (
      :new_alloc_id,
      10
    )::allocation_quantity
  ]
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
