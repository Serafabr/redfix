select api.modify_depot(
  :new_depot_id,
  'CT-20210001',
  3,
  'Title',
  'Manutenção elétrica'
), :mutation_ok + 1 as mutation_ok \gset
