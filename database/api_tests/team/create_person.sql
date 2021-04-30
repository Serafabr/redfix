\set tested_mutation api.create_person

select api.create_person(
  'person' || substr(gen_random_uuid()::text,1,8),
  substr((extract(epoch from now()) * 1000)::text,1,11),
  substr(gen_random_uuid()::text,1,8) || '@senado.leg.br',
  'Nome da Pessoa e Sobrenome',
  '1234',
  'supervisor'
) as new_person_id \gset

\set all_mutations :all_mutations:tested_mutation,
