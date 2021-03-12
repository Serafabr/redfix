\set tested_mutation api.reopen_taskcreate_asset

select api.reopen_task(
  :new_task_id,
  1
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
