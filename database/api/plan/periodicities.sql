drop view if exists api.periodicities;
create or replace view api.periodicities as
  select
    periodicity_id,
    periodicity_text,
    periodicity_days
  from periodicities
;
