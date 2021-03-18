\set tested_mutation api.create_internal_allocation

select api.create_internal_allocation(
  :new_task_id,
  :new_spec_id,
  :new_box_id,
  1
) as new_alloc_id \gset

select api.create_internal_allocation(
  :new_task_id,
  :new_spec_id,
  :new_box_id,
  1
) as alloc_to_be_deleted \gset

\set all_mutations :all_mutations:tested_mutation,
