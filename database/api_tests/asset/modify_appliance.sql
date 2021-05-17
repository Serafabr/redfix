\set tested_mutation api.modify_appliance

select api.modify_appliance(
  :new_appliance_id,
  'ELET-ET-' || substr(ext.gen_random_uuid()::text,1,8),
  'Estações Transformadoras',
  2,
  102,
  'Referência de local atualizada',
  'Descrição atualizada do novo equipamento.'
) as new_appliance_id \gset

\set all_mutations :all_mutations:tested_mutation,
