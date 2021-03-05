select api.create_monitor(
  'Tensão na saída do Transformador XYZ',
  'Deve ser medida com a configuração ABCDEFG do multímetro',
  'V',
  :new_asset_id
) as new_monitor_id, :mutation_ok + 1 as mutation_ok \gset
