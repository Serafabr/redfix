select api.insert_monitor_read(
  :new_monitor_id,
  now(),
  219,
  null
) as new_monitor_read_id, :mutation_ok + 1 as mutation_ok \gset
