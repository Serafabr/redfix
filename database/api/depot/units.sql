drop view if exists api.units;
create or replace view api.units as
  select
    unit_id,
    unit_text,
    dimensions
  from units
;
