\set function_name api.insert_price

drop function if exists :function_name;
create or replace function :function_name (
  in attributes prices,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into prices values (
        default,
        attributes.spec_id,
        attributes.date,
        attributes.price,
        attributes.price_source_type_id,
        attributes.source,
        true
      ) returning price_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `attributes.specId`\n
* `attributes.date`\n
* `attributes.price`\n
* `attributes.priceSourceTypeId`\n
* `attributes.source`\n
\n
Output `id`: `priceId` of the new price
';

grant execute on function :function_name to coordinator, supervisor, inspector;
