\set function_name api.upsert_caesb_bill

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
  in "note" text,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      -- "on conflict do update" clause allows updates using the same function
      insert into caesb_bills values (
        "caesbMeterId",
        "year",
        "month",
        "leituraAtual",
        "dataLeituraAtual",
        "leituraAnterior",
        "dataLeituraAnterior",
        "consumoMedio",
        "consumoFaturado",
        "valorEsgoto",
        "valorAgua",
        "note"
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
        "leituraAtual",
        "dataLeituraAtual",
        "leituraAnterior",
        "dataLeituraAnterior",
        "consumoMedio",
        "consumoFaturado",
        "valorEsgoto",
        "valorAgua",
        "note"
      ) where
        caesb_meter_id = "caesbMeterId" and
        year = "year" and
        month = "month"
      ;
      id = "caesbMeterId";
    end;
  $$
;
