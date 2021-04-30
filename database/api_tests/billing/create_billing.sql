\set tested_mutation api.create_billing

select api.create_billing(
  :new_depot_id,
  'Faturamento para o período X',
  '2021-02-01'::date,
  '2021-02-28'::date
) as new_billing_id \gset

\set all_mutations :all_mutations:tested_mutation,
