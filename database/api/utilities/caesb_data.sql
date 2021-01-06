drop view if exists api.caesb_data;
create or replace view api.caesb_data as
  select
    b.caesb_meter_id,
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
  from caesb_bills as b
  inner join caesb_meters as m using (caesb_meter_id)
;
