\set tested_mutation api.create_external_allocation

select api.create_external_allocation(
  
) as new_ext_alloc_id \gset

\set all_mutations :all_mutations:tested_mutation,
