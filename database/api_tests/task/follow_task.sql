\set tested_mutation api.follow_task

select api.follow_task(
  :new_task_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
