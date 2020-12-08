-- restart asset_id sequence
alter sequence assets_asset_id_seq restart with 5001;

-- asset_id = 5001
select api.insert_asset(
  (
    null,
    'ELET-ET-0000',
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
);

select api.insert_asset (
  (
    null,
    'ELET-ET-0001',
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
);

select api.insert_asset (
  (
    null,
    'ELET-ET-TR01',
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
);

select api.insert_asset_child(5001, 5002);
select api.insert_asset_child(5002, 5003);
