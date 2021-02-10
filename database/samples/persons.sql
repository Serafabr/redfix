select api.insert_person (
  (
    null,
    'person' || substr(gen_random_uuid()::text,1,8),
    substr((extract(epoch from now()) * 1000)::text,1,11),
    substr(gen_random_uuid()::text,1,8) || '@senado.leg.br',
    'Nome da Pessoa e Sobrenome',
    '1234',
    null,
    crypt('123456', gen_salt('bf', 10)),
    true,
    'coordinator',
    null
  )
) as person_id \gset

select api.insert_team(
  'Nome da Equipe',
  'Descrição da equipe'
) as team_id \gset

select api.insert_team_person (
  :'team_id'::integer,
  :'person_id'::integer
);
