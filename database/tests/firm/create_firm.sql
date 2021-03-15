\set tested_mutation api.create_firm

select api.create_firm(
  'Nome da empresa',
  replace(substr((extract(epoch from now()) * 100000)::text,1,14),'.','')
) as new_firm_id \gset

\set all_mutations :all_mutations:tested_mutation,
