\set tested_mutation api.modify_depot

select api.modify_depot(
  :new_depot_id,
  'CT-20210001',
  1,
  'Manutenção Elétrica',
  'Uma nova descrição'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
