\set tested_mutation api.create_price

select api.create_price(
  :new_spec_id,
  now()::date,
  100.01,
  1,
  'Empresa X'
) as new_price_id, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
