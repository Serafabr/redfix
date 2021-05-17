\set tested_mutation api.modify_person

select api.modify_person(
  :new_person_id,
  'person' || substr(ext.gen_random_uuid()::text,1,8),
  substr((extract(epoch from now()) * 1000)::text,1,11),
  substr(ext.gen_random_uuid()::text,1,8) || '@senado.leg.br',
  'Novo Nome',
  '1234',
  'supervisor'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
