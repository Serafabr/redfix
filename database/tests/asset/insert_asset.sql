select api.insert_asset(
  'ELET-ET-' || substr(gen_random_uuid()::text,1,8),
  'Estações Transformadoras',
  :'asset_category_electric'::integer,
  102
) as new_asset_id, :mutation_ok + 1 as mutation_ok \gset
