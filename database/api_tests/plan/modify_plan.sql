\set tested_mutation api.modify_plan

select api.modify_plan(
  :new_plan_id,
  'Nome do plano de manutenção',
  'Descrição corrigida e detalhada'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
