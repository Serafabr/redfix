\set function_name get_prices_of_spec

drop function if exists :function_name;
create or replace function :function_name (
  in "specId" integer,
  out list jsonb
)
  language sql
  strict
  stable
  as $$
    select coalesce_list(j.l) as list from (
      select
        jsonb_agg(jsonb_build_object(
          'priceId', p.price_id,
          'price', p.price,
          'date', p.date,
          'validDays', p.valid_days
        ) order by p.date) as l
      from prices as p
      where p.spec_id = "specId"
    ) as j
  $$
;

grant execute on function :function_name to cmms_user;
