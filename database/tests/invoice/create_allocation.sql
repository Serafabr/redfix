\set tested_mutation api.create_allocation

select api.create_allocation(
  :new_task_id,
  :new_spec_id,
  10,
  :new_box_id,
  null
) as new_alloc_id \gset

select api.create_allocation(
  :new_task_id,
  :new_spec_id,
  11,
  :new_box_id,
  null
) as alloc_to_be_deleted \gset


\set all_mutations :all_mutations:tested_mutation,
