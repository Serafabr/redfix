\set tested_mutation api.finish_task_allocations

select api.finish_task_allocations(
  array[
    (
      :new_alloc_id,
      9
    )::allocation_quantity
  ]
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
