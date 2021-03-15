\set tested_mutation api.modify_appliance

select api.modify_appliance(
  :new_appliance_id,
  'ELET-ET-' || substr(gen_random_uuid()::text,1,8),
  'Estações Transformadoras',
  2,
  102,
  'Descrição atualizada do novo equipamento.'
) as new_appliance_id, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
