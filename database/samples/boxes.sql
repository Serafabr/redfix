-- box_id = 1
select api.insert_box (
  1,
  null,
  'Original',
  'Primeira caixa do contrato'
) as last_id \gset

select api.activate_box (:'last_id'::integer);
