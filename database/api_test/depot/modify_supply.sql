select api.modify_supply(
  :new_supply_id,
  'M0001',
  :new_box_id,
  376,
  1000,
  99.98
), :mutation_ok + 1 as mutation_ok \gset
