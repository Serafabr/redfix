\set tested_mutation api.add_asset_to_task

select api.add_asset_to_task(
  :new_task_id,
  :new_asset_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
