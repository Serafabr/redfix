select api.modify_plan(
  :new_plan_id,
  'Nome do plano de manutenção',
  'Descrição corrigida e detalhada',
  1
), :mutation_ok + 1 as mutation_ok \gset
