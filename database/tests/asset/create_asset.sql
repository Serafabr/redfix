\set tested_mutation api.create_asset

select api.create_asset(
  'ELET-ET-' || substr(gen_random_uuid()::text,1,8),
  'Estações Transformadoras',
  2,
  102
) as new_asset_id \gset

\set all_mutations :all_mutations:tested_mutation,
