select api.modify_caesb_bill(
  1,
  2021,
  1,
  100,
  '2021-01-31'::date,
  50,
  '2021-01-01'::date,
  55,
  50,
  10000.99,
  10000.99,
  'Anotação sobre esta fatura da CAESB'
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
