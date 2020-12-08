\set function_name web.insert_ceb_bill

drop function if exists :function_name;
create or replace function :function_name (
  in values_string text,
  out inserted_count integer
)
  language plpgsql
  strict
  as $$
    begin
      -- "on conflict do nothing" clause avoids error in case of ceb bills that already are in the database
      execute format('insert into ceb_bills values %s on conflict do nothing returning 1', values_string) into inserted_count;
      inserted_count = coalesce(inserted_count, 0);
    end;
  $$
;
