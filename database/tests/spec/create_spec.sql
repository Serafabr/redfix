\set tested_mutation api.create_spec

select api.create_spec(
  'SF-99999',
  'v01',
  'ESPEC. TÉC. INVENTADA',
  1,
  1,
  'un',
  1
) as new_spec_id, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
