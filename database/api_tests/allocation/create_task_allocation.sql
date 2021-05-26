\set tested_mutation api.create_task_allocation

select api.create_task_allocation(
  :new_task_id,
  :new_supply_id,
  :new_depot_id,
  11
) as new_alloc_id \gset

\set all_mutations :all_mutations:tested_mutation,
