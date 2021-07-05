\set tested_mutation api.delete_task_allocations

select api.delete_task_allocations(
  array[
    :alloc_to_be_deleted::integer
  ]
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
