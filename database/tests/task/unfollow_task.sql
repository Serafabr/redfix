\set tested_mutation api.unfollow_task

select api.unfollow_task(
  :new_task_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
