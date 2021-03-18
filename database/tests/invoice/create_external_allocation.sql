\set tested_mutation api.create_external_allocation

select api.create_external_allocation(
  :new_task_id,
  :new_ext_spec_id,
  2,
  null
) as new_ext_alloc_id \gset

\set all_mutations :all_mutations:tested_mutation,
