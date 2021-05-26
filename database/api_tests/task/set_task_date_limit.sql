\set tested_mutation api.set_task_date_limit

select api.set_task_date_limit(
  :new_task_id,
  '2021-06-01'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
