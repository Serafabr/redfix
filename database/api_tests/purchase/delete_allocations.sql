\set tested_mutation api.delete_allocations

select api.delete_allocations(
  array[:alloc_to_be_deleted]
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
