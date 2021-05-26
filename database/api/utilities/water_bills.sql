drop view if exists api.water_bills;
create or replace view api.water_bills as
  select
    b.water_meter_id,
    b.year,
    b.month,
    b.leitura_atual,
    b.data_leitura_atual,
    b.leitura_anterior,
    b.data_leitura_anterior,
    b.consumo_medio,
    b.consumo_faturado,
    b.valor_esgoto,
    b.valor_agua,
    b.note
  from water_bills as b
  inner join water_meters as m using (water_meter_id)
;
