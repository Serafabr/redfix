insert into assets overriding system value values (
  get_constant_value('asset_category_facility')::integer,
  'CASF-000-000',
  'Endereçamento do CASF',
  null,
  get_constant_value('asset_category_facility')::integer,
  null,
  null,
  null
);

insert into assets overriding system value values (
  get_constant_value('asset_category_electric')::integer,
  'ELET-00-0000',
  'Sistema elétrico', 'Engloba todos os quadros elétricos, geradores e nobreaks do Senado Federal',
  get_constant_value('asset_category_electric')::integer,
  null,
  null,
  null,
  null,
  null,
  null,
  null
);

insert into assets overriding system value values (
  get_constant_value('asset_category_air')::integer,
  'MECN-SR-0001',
  'Sistem de refrigeração do Senado Federal',
  'Sistem de refrigeração do Senado Federal',
  get_constant_value('asset_category_air')::integer,
  null,
  null,
  null,
  null,
  null,
  null,
  null
);

insert into assets overriding system value values (
  get_constant_value('asset_category_hydro')::integer,
  'CIVL-HD-0001',
  'Sistema hidráulico do Senado Federal',
  'Engloba todas as bombas, tubulações, caixas d''água.',
  get_constant_value('asset_category_hydro')::integer,
  null,
  null,
  null,
  null,
  null,
  null,
  null
);
