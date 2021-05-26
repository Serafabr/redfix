\set tested_mutation api.modify_billing

select api.modify_billing(
  :new_billing_id,
  'Faturamento para o período X',
  '2021-02-01'::date,
  '2021-02-28'::date,
  null,
  null,
  'Uma observação adicional'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
