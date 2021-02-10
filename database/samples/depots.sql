select api.insert_depot (
  (
    null,-- depot_id
    'CT20200001',-- depot_sf
    null,-- created_at
    null,-- updated_at
    null,-- created_by
    null,-- updated_by
    2,-- depot_category_id
    '2020-01-01',-- date_sign
    '2019-12-31',-- date_pub
    '2020-03-01',-- date_start
    '2020-12-31',-- date_end
    null,-- firm_id
    'Manutenção do sistema elétrico',-- title
    'Manutenção de todo o sistema elétrico do SF',-- description
    null,-- url
    '00200.012345/2019-00'-- sigad
  )
) as depot_id \gset

select api.insert_box (
  :'depot_id'::integer,
  null,
  'Original',
  'Primeira caixa do contrato'
) as box_id \gset

select api.activate_box (:'box_id'::integer);

select api.insert_supply (
  (
    null,-- supply_id
    'M-01',-- supply_sf
    :'box_id'::integer,-- box_id
    376,-- spec_id
    100,-- qty_initial
    99.99-- price
  )
);
