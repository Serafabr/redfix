\set function_name web.insert_ceb_bill_note

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
      "newNote" alias for "note";
    begin
      update ceb_bills as c set note = "newNote" where c.ceb_meter_id = "cebMeterId" and c.year = "year" and c.month = "month";
      id = "cebMeterId";
    end;
  $$
;
