\set function_name api.set_allocations_prices

drop function if exists :function_name;
create or replace function :function_name (
  in "allocationsPrices" alloc_price[],
  out id integer
)
  language plpgsql
  as $$
    begin
      with aa as (
        select (unnest("allocationsPrices")).*
      ) update allocations as a set
        price_source  = aa.price_source,
        price = aa.price
      from aa
      where a.alloc_id = aa.alloc_id;
      id = 1;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`1`\n') as new_comment \gset

comment on function :function_name is :'new_comment';
