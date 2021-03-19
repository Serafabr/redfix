drop view if exists api.allocations_prices_options;
create or replace view api.allocations_prices_options as
  select
    a.alloc_id,
    si.price as internal_price,
    si.bdi as internal_bdi,
    se.price as external_price,
    se.bdi as external_bdi,
    get_prices_of_spec(a.spec_id)
  from allocations as a
  left join boxes as bi on (a.internal_box_id = bi.box_id)
  left join boxes as be on (a.external_box_id = be.box_id)
  left join supplies as si on (a.spec_id = si.spec_id and si.box_id = a.internal_box_id)
  left join supplies as se on (a.spec_id = se.spec_id and se.box_id = a.internal_box_id)
;
