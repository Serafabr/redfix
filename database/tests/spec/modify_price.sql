select api.modify_price(
  :new_price_id,
  :new_spec_id,
  now()::date,
  11.22,
  1,
  'Empresa X'
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
