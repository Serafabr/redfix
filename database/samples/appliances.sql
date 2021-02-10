select api.insert_asset(
  (
    null,
    'ELET-ET-' || substr(gen_random_uuid()::text,1,8),
    'Estações Transformadoras',
    'Engloba todas as estações transformadoras do Senado Federal',
    :'asset_category_electric'::integer,
    :'asset_category_facility'::integer,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  )
) as asset_1 \gset

select api.insert_asset (
  (
    null,
    'ELET-ET-' || substr(gen_random_uuid()::text,1,8),
    'Estação Transformadora 01 - Blocos de Apoio',
    'Capacidade X, Transformadores A, B, C',
    :'asset_category_electric'::integer,
    4156,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  )
) as asset_2 \gset

select api.insert_asset (
  (
    null,
    'ELET-ET-TR-' || substr(gen_random_uuid()::text,1,4),
    'Estação Transformadora 01 - Blocos de Apoio - Transformador A',
    'Capacidade 700 kVA',
    :'asset_category_electric'::integer,
    4156,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  )
) as asset_3 \gset

select api.insert_asset_child(:'asset_1'::integer, :'asset_2'::integer);
select api.insert_asset_child(:'asset_2'::integer, :'asset_3'::integer);
