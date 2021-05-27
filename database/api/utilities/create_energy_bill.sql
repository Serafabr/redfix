\set function_name web.create_energy_bill

drop function if exists :function_name;
create or replace function :function_name (
  in values_string text,
  out inserted_count integer
)
  language plpgsql
  strict
  security definer
  as $$
    begin
      -- "on conflict do nothing" clause avoids error in case of bills that already are in the database
      execute format('insert into energy_bills values %s on conflict do nothing', values_string);
      get diagnostics inserted_count = row_count;
    end;
  $$
;

grant execute on function :function_name to cmms_user;
