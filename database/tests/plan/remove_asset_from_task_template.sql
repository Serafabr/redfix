\set tested_mutation api.remove_asset_from_task_template

select api.remove_asset_from_task_template(
  :new_task_template_id,
  1001
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
