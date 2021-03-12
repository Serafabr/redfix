\set tested_mutation api.remove_asset_from_task

select api.remove_asset_from_task(
  :new_task_id,
  :new_asset_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
