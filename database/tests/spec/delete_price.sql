select api.delete_price(
  :new_price_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset