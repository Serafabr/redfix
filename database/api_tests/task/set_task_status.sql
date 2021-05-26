\set tested_mutation api.set_task_status

select api.set_task_status(
  :new_task_id,
  2
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
