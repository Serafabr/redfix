\set function_name api.modify_caesb_bill

drop function if exists :function_name;
create or replace function :function_name (
  in "caesbMeterId" integer,
  in "year" integer,
  in "month" integer,
  in "leituraAtual" integer,
  in "dataLeituraAtual" date,
  in "leituraAnterior" integer,
  in "dataLeituraAnterior" date,
  in "consumoMedio" integer,
  in "consumoFaturado" integer,
  in "valorEsgoto" numeric,
  in "valorAgua" numeric,
  in "note" text default null,
  out id integer
)
  language plpgsql
  as $$
    declare
      bill_year alias for "year";
      bill_month alias for "month";
      new_note alias for "note";
    begin
      update caesb_bills as c set (
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
        "leituraAtual",
        "dataLeituraAtual",
        "leituraAnterior",
        "dataLeituraAnterior",
        "consumoMedio",
        "consumoFaturado",
        "valorEsgoto",
        "valorAgua",
        new_note
      ) where
        c.caesb_meter_id = "caesbMeterId" and
        c.year = bill_year and
        c.month = bill_month
      ;
      id = "caesbMeterId";
    end;
  $$
;
