\set tested_mutation api.create_supply

select api.create_supply(
  'M-01',
  :new_box_id,
  376,
  1000,
  99.99
) as new_supply_id, :mutation_ok + 1 as mutation_ok \gset

select api.create_supply(
  'M-02',
  :new_box_id,
  380,
  100,
  99
) as supply_to_be_removed_from_task \gset

select api.create_supply(
  'M-03',
  :new_box_id,
  378,
  10,
  9.10
) as supply_to_be_deleted \gset

\set all_mutations :all_mutations:tested_mutation,
