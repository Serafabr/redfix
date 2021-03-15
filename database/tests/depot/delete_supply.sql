\set tested_mutation api.delete_supply

select api.delete_supply(
  :supply_to_be_deleted
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
