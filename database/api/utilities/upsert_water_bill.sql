\set function_name api.upsert_water_bill

drop function if exists :function_name;
create or replace function :function_name (
  in "waterMeterId" integer,
  in "YEAR" integer,
  in "MONTH" integer,
  in "leituraAtual" integer,
  in "dataLeituraAtual" date,
  in "leituraAnterior" integer,
  in "dataLeituraAnterior" date,
  in "consumoMedio" integer,
  in "consumoFaturado" integer,
  in "valorEsgoto" numeric,
  in "valorAgua" numeric,
  in "NOTE" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into water_bills as w values (
        "waterMeterId",
        "YEAR",
        "MONTH",
        "leituraAtual",
        "dataLeituraAtual",
        "leituraAnterior",
        "dataLeituraAnterior",
        "consumoMedio",
        "consumoFaturado",
        "valorEsgoto",
        "valorAgua",
        "NOTE"
      ) on conflict (water_meter_id, year, month) do update set
        leitura_atual = "leituraAtual",
        data_leitura_atual = "dataLeituraAtual",
        leitura_anterior = "leituraAnterior",
        data_leitura_anterior = "dataLeituraAnterior",
        consumo_medio = "consumoMedio",
        consumo_faturado = "consumoFaturado",
        valor_esgoto = "valorEsgoto",
        valor_agua = "valorAgua",
        note = "NOTE"
      where
        w.water_meter_id = "waterMeterId" and
        w.year = "YEAR" and
        w.month = "MONTH"
      ;
      id = "waterMeterId";
    end;
  $$
;

grant execute on function :function_name to supervisor;

select generate_api_documentation(:'function_name',E'the same as `waterMeterId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
