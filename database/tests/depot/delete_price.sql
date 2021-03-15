\set tested_mutation api.delete_price

select api.delete_price(
  :new_price_id
) as new_price_id \gset

\set all_mutations :all_mutations:tested_mutation,
