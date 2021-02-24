\set function_name api.insert_caesb_bill

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
    begin
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
      );
      id = "caesbMeterId";
    end;
  $$
;
