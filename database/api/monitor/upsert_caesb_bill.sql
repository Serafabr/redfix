\set function_name api.upsert_caesb_bill

drop function if exists :function_name;
create or replace function :function_name (
  in attributes caesb_bills,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      -- "on conflict do update" clause allows updates using the same function
      insert into caesb_bills values (
        attributes.caesb_meter_id,
        attributes.year,
        attributes.month,
        attributes.leitura_atual,
        attributes.data_leitura_atual,
        attributes.leitura_anterior,
        attributes.data_leitura_anterior,
        attributes.consumo_medio,
        attributes.consumo_faturado,
        attributes.valor_esgoto,
        attributes.valor_agua,
        attributes.note
      ) on conflict do update set (
        leitura_atual,
        data_leitura_atual,
        leitura_anterior,
        data_leitura_anterior,
        consumo_medio,
        consumo_faturado,
        valor_esgoto,
        valor_agua,
        note
      ) = (
        attributes.leitura_atual,
        attributes.data_leitura_atual,
        attributes.leitura_anterior,
        attributes.data_leitura_anterior,
        attributes.consumo_medio,
        attributes.consumo_faturado,
        attributes.valor_esgoto,
        attributes.valor_agua,
        attributes.note
      ) where
        caesb_meter_id = attributes.caesb_meter_id and
        year = attributes.year and
        month = attributes.month
      ;
      id = attributes.caesb_meter_id;
    end;
  $$
;
