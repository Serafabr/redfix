select api.modify_plan(
  :new_plan_id,
  'Nome do plano de manutenção',
  'Descrição corrigida e detalhada',
  1
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
