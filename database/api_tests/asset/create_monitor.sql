\set tested_mutation api.create_monitor

select api.create_monitor(
  'Tensão na saída do Transformador XYZ',
  'Deve ser medida com a configuração ABCDEFG do multímetro',
  2,
  'V',
  :new_asset_id
) as new_monitor_id \gset

\set all_mutations :all_mutations:tested_mutation,
