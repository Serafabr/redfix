\set tested_mutation api.create_energy_bill_note

select api.create_energy_bill_note(
  1,
  2021,
  1,
  'Algumas observações sobre a fatura da CEB'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
