select api.remove_supply(
  :supply_id_to_be_deleted
), :mutation_ok + 1 as mutation_ok \gset
