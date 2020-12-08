-- box_id = 1
select api.insert_box (
  1,
  null,
  'Original',
  'Primeira versão do contrato'
);

select api.activate_box (1);
