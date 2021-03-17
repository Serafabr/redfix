\set tested_mutation api.create_depot

select api.create_depot(
  'CT 20210001',
  3,
  'Contrato de Manutenção Elétrica',
  'Descrição'
) as new_depot_id \gset

select box_id as original_box_id from boxes where depot_id = :new_depot_id \gset

\set all_mutations :all_mutations:tested_mutation,
