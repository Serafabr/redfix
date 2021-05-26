\set tested_mutation api.create_depot

select api.create_depot(
  'CT 20210001',
  1,
  'Contrato de Manutenção Elétrica',
  'Descrição',
  null,
  :new_firm_id,
  25,
  20,
  '2021-01-01'::date,
  '2021-01-02'::date,
  '2021-02-01'::date,
  '2022-01-31'::date
) as new_depot_id \gset

\set all_mutations :all_mutations:tested_mutation,
