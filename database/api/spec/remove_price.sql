\set function_name api.remove_price

drop function if exists :function_name;
create or replace function :function_name (
  in "priceId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      delete from prices where price_id = "priceId";
      id = "priceId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `priceId`\n
\n
Output `id`: the same as `priceId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector;
