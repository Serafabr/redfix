\set function_name api.insert_ceb_bill_note

drop function if exists :function_name;
create or replace function :function_name (
  in "cebMeterId" integer,
  in "year" integer,
  in "month" integer,
  in "note" text,
  out id integer
)
  language plpgsql
  strict
  as $$
    declare
      bill_year alias for "year";
      bill_month alias for "month";
      "newNote" alias for "note";
    begin
      update ceb_bills as c set note = "newNote" where c.ceb_meter_id = "cebMeterId" and c.year = bill_year and c.month = bill_month;
      id = "cebMeterId";
    end;
  $$
;
