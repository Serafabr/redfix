\set tested_mutation api.modify_monitor

select api.modify_monitor(
  :new_monitor_id,
  'Tensão na saída do Transformador XYZ',
  'Deve ser medida com a configuração ABCDEFGhijk do multímetro',
  'V',
  :new_asset_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
