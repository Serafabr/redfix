\set tested_mutation api.create_price

select api.create_price(
  :new_spec_id,
  99.98,
  '2021-01-31'::date,
  60,
  2,
  null,
  null
) as new_price_id, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
