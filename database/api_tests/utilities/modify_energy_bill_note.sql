\set tested_mutation api.modify_energy_bill_note

select api.modify_energy_bill_note(
  466453,
  2020,
  6,
  'Algumas observações sobre a fatura de energia elétrica'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
