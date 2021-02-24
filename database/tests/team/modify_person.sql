select api.modify_person(
  :new_person_id,
  'person' || substr(gen_random_uuid()::text,1,8),
  substr((extract(epoch from now()) * 1000)::text,1,11),
  substr(gen_random_uuid()::text,1,8) || '@senado.leg.br',
  'Novo Nome',
  '1234',
  'coordinator'
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
