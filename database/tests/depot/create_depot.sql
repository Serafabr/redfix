\set tested_mutation api.create_depot

select api.create_depot(
  'CT 20210001',
  3,
  'Contrato de Manutenção Elétrica',
  'Descrição'
) as new_depot_id, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
