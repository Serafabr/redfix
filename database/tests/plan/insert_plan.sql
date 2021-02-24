select api.insert_plan(
  'Nome do plano de manut.',
  'Descrição.',
  :new_depot_id
) as new_plan_id, :mutation_ok + 1 as mutation_ok \gset
