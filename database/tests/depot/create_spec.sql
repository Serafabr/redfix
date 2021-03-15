\set tested_mutation api.create_spec

select api.create_spec(
  :new_depot_id,
  'SF-0001',
  'Cabo XYZ',
  2
) as new_spec_id, :mutation_ok + 1 as mutation_ok \gset

select api.create_spec(
  :new_depot_id,
  'SF-0002',
  'Cabo ABC',
  2
) as another_spec_id \gset

select api.create_spec(
  :new_depot_id,
  'SF-0003',
  'Cabo QWERTY',
  2
) as third_spec_id \gset

\set all_mutations :all_mutations:tested_mutation,
