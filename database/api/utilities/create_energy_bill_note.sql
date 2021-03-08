\set function_name api.create_energy_bill_note

drop function if exists :function_name;
create or replace function :function_name (
  in "energyMeterId" integer,
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
      update energy_bills as e set note = "newNote" where e.energy_meter_id = "energyMeterId" and e.year = bill_year and e.month = bill_month;
      id = "energyMeterId";
    end;
  $$
;
