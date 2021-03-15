\set tested_mutation api.modify_spec

select api.modify_spec(
  :new_spec_id,
  'SF-0001',
  'Cabo XYZZYX',
  2
) as new_spec_id \gset

\set all_mutations :all_mutations:tested_mutation,
