\set tested_mutation api.create_monitor_read

select api.create_monitor_read(
  :new_monitor_id,
  now(),
  219,
  null
) as new_monitor_read_id, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
