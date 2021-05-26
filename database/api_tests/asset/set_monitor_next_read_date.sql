\set tested_mutation api.set_monitor_next_read_date

select api.set_monitor_next_read_date(
  :new_monitor_id,
  '2021-12-31T13:00:00'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
