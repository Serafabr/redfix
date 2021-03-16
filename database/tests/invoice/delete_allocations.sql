\set tested_mutation api.delete_allocations

select api.delete_allocations(
  array[:alloc_to_be_deleted]
) as new_alloc_id \gset

\set all_mutations :all_mutations:tested_mutation,
