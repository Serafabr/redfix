\set tested_mutation api.create_appliance

select api.create_appliance(
  'ELET-ET-' || substr(gen_random_uuid()::text,1,8),
  'Estações Transformadoras',
  2,
  102,
  'Uma referência dentro do local',
  'Descrição do novo equipamento.'
) as new_appliance_id \gset

\set all_mutations :all_mutations:tested_mutation,
