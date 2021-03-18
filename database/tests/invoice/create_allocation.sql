\set tested_mutation api.create_allocation

select api.create_allocation(
  :new_task_id,
  :new_spec_id,
  0.1,
  :new_box_id,
  null
) as another_alloc_id \gset

\set all_mutations :all_mutations:tested_mutation,
