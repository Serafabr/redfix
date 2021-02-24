select api.modify_monitor_read(
  :new_monitor_read_id,
  '2021-01-31'::timestamptz,
  219.9
), :mutation_ok + 1 as mutation_ok \gset
