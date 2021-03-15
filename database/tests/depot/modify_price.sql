\set tested_mutation api.modify_price

select api.modify_price(
  :new_price_id,
  :new_spec_id,
  99.98,
  '2021-01-31'::date,
  365,
  1,
  null,
  null
) as new_price_id \gset

\set all_mutations :all_mutations:tested_mutation,
