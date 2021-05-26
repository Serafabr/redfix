\set tested_mutation api.modify_energy_bill_note

select api.modify_energy_bill_note(
  1,
  2021,
  1,
  'Algumas observações sobre a fatura da CEB'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
