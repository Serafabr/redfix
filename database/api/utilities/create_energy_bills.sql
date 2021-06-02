\set function_name api.create_energy_bills

drop function if exists :function_name;
create or replace function :function_name (
  in "valuesString" text default '',
  out id integer
)
  language plpgsql
  as $$
    begin
      -- "on conflict do nothing" clause avoids error in case of bills that already are in the database
      execute format('insert into energy_bills values %s on conflict do nothing', "valuesString");
      get diagnostics id = row_count;
    end;
  $$
;

grant execute on function :function_name to supervisor;
