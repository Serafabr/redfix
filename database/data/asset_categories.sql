insert into assets
  select  ac.asset_category_id,
          'CASF-000-000',
          ac.asset_category_text,
          'Descrição do CASF.',
          ac.asset_category_id,
          :'asset_category_facility'::integer
  from asset_categories as ac
  where ac.asset_category_id = :'asset_category_facility'::integer
;

insert into assets
  select  ac.asset_category_id,
          'ELET-000-000',
          ac.asset_category_text,
          null,
          ac.asset_category_id,
          :'asset_category_facility'::integer
  from asset_categories as ac
  where ac.asset_category_id = :'asset_category_electric'::integer
;

insert into assets
  select  ac.asset_category_id,
          'REFR-000-000',
          ac.asset_category_text,
          null,
          ac.asset_category_id,
          :'asset_category_facility'::integer
  from asset_categories as ac
  where ac.asset_category_id = :'asset_category_air'::integer
;

insert into assets
  select  ac.asset_category_id,
          'HIDRO-000-000',
          ac.asset_category_text,
          null,
          ac.asset_category_id,
          :'asset_category_facility'::integer
  from asset_categories as ac
  where ac.asset_category_id = :'asset_category_hydro'::integer
;
