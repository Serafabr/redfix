\set tested_mutation api.cancel_send_task

select api.cancel_send_task(
  :new_task_id,
  1
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
