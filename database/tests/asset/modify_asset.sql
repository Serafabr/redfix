\set tested_mutation api.modify_asset

select api.modify_asset(
  :new_asset_id,
  'ELET-ET-' || substr(gen_random_uuid()::text,1,8),
  'name',
  1,
  1
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
