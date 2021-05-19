\set tested_mutation api.set_task_date_end

select api.set_task_date_end(
  :new_task_id,
  '2021-05-01'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
