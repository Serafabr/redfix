select api.modify_self(
  'hzlopes',
  '00000000001',
  'hzl@senado.leg.br',
  'Henrique Z L',
  '2339'
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
