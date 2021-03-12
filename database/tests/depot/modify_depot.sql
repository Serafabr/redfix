\set tested_mutation api.modify_depot

select api.modify_depot(
  :new_depot_id,
  'CT-20210001',
  3,
  'Title',
  'Manutenção elétrica'
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
