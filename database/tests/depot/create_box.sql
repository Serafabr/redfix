\set tested_mutation api.create_box

select api.create_box(
  :new_depot_id,
  'Versão Original',
  true,
  null,
  'Itens conforme edital'
) as new_box_id \gset

\set all_mutations :all_mutations:tested_mutation,
