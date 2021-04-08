\set tested_mutation api.create_box

select api.create_box(
  'Primeiro T.A.',
  :new_depot_id,
  true,
  0,
  0,
  :original_box_id,
  'Itens conforme edital'
) as new_box_id \gset

select api.create_box(
  'Nota Fiscal 199',
  :new_depot_id,
  false,
  0,
  0,
  null,
  'Materiais que não constam no edital'
) as new_invoice_id \gset

\set all_mutations :all_mutations:tested_mutation,
