\set tested_mutation api.create_plan

select api.create_plan(
  'Nome do plano de manut.',
  'Descrição.',
  :new_depot_id
) as new_plan_id \gset

\set all_mutations :all_mutations:tested_mutation,
