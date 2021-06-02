\set function_name api.modify_energy_bill_note

drop function if exists :function_name;
create or replace function :function_name (
  in "energyMeterId" integer,
  in "YEAR" integer,
  in "MONTH" integer,
  in "NOTE" text,
  out id integer
)
  language plpgsql
  as $$
    begin
      update energy_bills as e set note = "NOTE" where
        e.energy_meter_id = "energyMeterId" and 
        e.year = "YEAR" and
        e.month = "MONTH"
      ;
      id = "energyMeterId";
    end;
  $$
;

grant execute on function :function_name to supervisor;

select generate_api_documentation(:'function_name',E'the same as `energyMeterId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
