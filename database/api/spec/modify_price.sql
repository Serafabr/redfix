\set function_name api.modify_price

drop function if exists :function_name;
create or replace function :function_name (
  in attributes prices,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update prices set (
        spec_id,
        date,
        price,
        price_source_type_id,
        source
      ) = (
        attributes.spec_id,
        attributes.date,
        attributes.price,
        attributes.price_source_type_id,
        attributes.source
      ) where price_id = attributes.price_id;
      id = attributes.price_id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `attributes.priceId`\n
* `attributes.specId`\n
* `attributes.date`\n
* `attributes.price`\n
* `attributes.priceSourceTypeId`\n
* `attributes.source`\n
\n
Output `id`: `priceId` of the modified price
';

grant execute on function :function_name to coordinator, supervisor, inspector;
