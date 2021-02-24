select api.insert_person (
  'person' || substr(gen_random_uuid()::text,1,8),
  substr((extract(epoch from now()) * 1000)::text,1,11),
  substr(gen_random_uuid()::text,1,8) || '@senado.leg.br',
  'Nome da Pessoa e Sobrenome',
  '1234',
  'coordinator'
) as new_person_id, :mutation_ok + 1 as mutation_ok \gset
