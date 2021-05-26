\set tested_mutation api.clone_task

select api.clone_task(
  :new_task_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
