drop view if exists api.supply_options;
create or replace view api.supply_options as
  select  z.spec_id,
          z.spec_sf,
          z.version,
          z.name
  from specs as z
;
