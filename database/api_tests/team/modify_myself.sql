\set tested_mutation api.modify_myself

select api.modify_myself(
  'hzlopes',
  '00000000001',
  'hzl@senado.leg.br',
  'Henrique Z L',
  '2339'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
