\set tested_mutation api.modify_monitor_read

select api.modify_monitor_read(
  :new_monitor_read_id,
  '2021-01-31'::timestamptz,
  219.9
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
