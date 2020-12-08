-- begin transaction and set person_id = 1
begin transaction;
set local cookie.session.person_id to 1;

-- depot_id = 1, box_id = 1
select api.insert_depot (
  (
    null,-- depot_id
    'CT20200001',-- depot_sf
    null,-- created_at
    null,-- updated_at
    null,-- created_by
    null,-- updated_by
    2,-- depot_category_id
    '2020-01-01',-- date_sign
    '2019-12-31',-- date_pub
    '2020-03-01',-- date_start
    '2020-12-31',-- date_end
    'Exemplo Manutanção Ltda.',-- company
    'Manutenção do sistema elétrico',-- title
    'Manutenção de todo o sistema elétrico do SF',-- description
    null,-- url
    '00200.012345/2019-00',-- sigad
    null-- box_id
  ),
  'Novo contrato iniciado'
);

-- supply_id = 1
select api.insert_supply (
  (
    null,-- supply_id
    'S-01',-- supply_sf
    1,-- box_id
    80,-- spec_id
    100,-- qty_initial
    99.99-- price
  )
);

-- supply_id = 2
select api.insert_supply (
  (
    null,-- supply_id
    'S-02',-- supply_sf
    1,-- box_id
    178,-- spec_id
    200,-- qty_initial
    199.99-- price
  )
);

select api.modify_supply (
  (
    2,-- supply_id
    'S-02',-- supply_sf
    1,-- box_id
    178,-- spec_id
    220,-- qty_initial
    299.99-- price
  )
);

-- supply_id = 3
select api.insert_supply (
  (
    null,-- supply_id
    'M-03',-- supply_sf
    1,-- box_id
    257,-- spec_id
    1000,-- qty_initial
    1.98-- price
  )
);

select api.set_active_box (
  1,-- depot_id
  1 -- box_id
);

-- task_event_id = 1
select api.insert_task(
  (
    null,-- task_id
    null,-- created_at
    null,-- updated_at
    null,-- created_by
    null,-- updated_by
    1,-- task_priority_id
    1,-- task_category_id
    null,-- project_id
    'Manutenção no subsolo do Edifício Principal',-- title
    'Troca de eletrodutos e lâmpadas queimadas',-- description
    'Subsolo do Ed. Principal',-- place
    null,-- progress
    '2020-12-31',-- date_limit
    null,-- date_start
    null,-- date_end
    null,-- request_id
    1,-- team_id
    null,-- next_team_id
    null-- task_status_id
  ),
  array[4,5,6],
  null
);

select api.insert_task_files(
  1,
  array[
    (
      'texto.txt',
      'de741848-5e90-4c5e-8699-78aca9b37aba',
      1234
    )::file_metadata,
    (
      'texto.txt',
      'ee841848-5e90-4c5e-8699-78aca9b37aba',
      4321
    )::file_metadata
  ]
);

select api.remove_task_file(
  1,
  'ee841848-5e90-4c5e-8699-78aca9b37aba'
);

-- commit transaction
commit transaction;

-- begin transaction and set person_id = 1
begin transaction;
set local cookie.session.person_id to 1;

-- task_event_id = 2
select api.send_task(
  (
    null,
    1,-- task_id
    null,-- event_name
    null,-- event_time
    null,-- person_id
    1,-- team_id
    2,-- next_team_id
    null,-- task_status_id
    'Para verificação.',-- note
    null,
    null,
    null
  )
);

-- commit transaction for person_id = 1
commit transaction;

-- begin transaction for person_id = 2
begin transaction;
set local cookie.session.person_id to 2;

-- task_event_id = 3
select api.receive_task(
  (
    null,
    1,-- task_id
    null,-- event_name
    null,-- event_time
    null,-- person_id
    2,-- team_id
    null,-- next_team_id
    2,-- task_status_id
    null,-- note
    null,
    null,
    null
  )
);

-- commit transaction for person_id = 1
commit transaction;

-- begin transaction for person_id = 2
begin transaction;
set local cookie.session.person_id to 2;

-- task_event_id = 4
select api.insert_task_note(
  (
    null,
    1,-- task_id
    null,-- event_name
    null,-- event_time
    null,-- person_id
    2,-- team_id
    null,-- next_team_id
    null,-- task_status_id
    'Verificação será comandada por Machado de Assis.',-- note
    null,
    null,
    null
  )
);

-- commit transaction
commit transaction;

-- begin transaction for person_id = 2
begin transaction;
set local cookie.session.person_id to 2;

-- task_event_id = 5
select api.move_task(
  (
    null,
    1,-- task_id
    null,-- event_name
    null,-- event_time
    null,-- person_id
    2,-- team_id
    null,-- next_team_id
    3,-- task_status_id
    'Verificação foi concluída com sucesso.',-- note
    null,
    null,
    null
  )
);

-- commit transaction
commit transaction;

-- begin transaction for person_id = 2
begin transaction;
set local cookie.session.person_id to 2;

-- task_event_id = 6
select api.send_task(
  (
    null,
    1,-- task_id
    null,-- event_name
    null,-- event_time
    null,-- person_id
    2,-- team_id
    3,-- next_team_id
    null,-- task_status_id
    'Após verificação.',-- note
    null,
    null,
    null
  )
);

-- commit transaction
commit transaction;

-- begin transaction for person_id = 2
begin transaction;
set local cookie.session.person_id to 2;

-- task_event_id = 7
select api.cancel_send_task(
  (
    null,
    1,-- task_id
    null,-- event_name
    null,-- event_time
    null,-- person_id
    2,-- team_id
    null,-- next_team_id
    null,-- task_status_id
    null,-- note
    null,
    null,
    null
  )
);

-- commit transaction
commit transaction;

-- begin transaction for person_id = 2
begin transaction;
set local cookie.session.person_id to 2;

select api.modify_task(
  (
    1,-- task_id
    null,-- created_at
    null,-- updated_at
    null,-- created_by
    null,-- updated_by
    1,-- task_priority_id
    1,-- task_category_id
    null,-- project_id
    'Manutenção no subsolo do Edifício Principal',-- title
    'Troca de eletrodutos e lâmpadas queimadas',-- description
    'Subsolo do Edifício Principal',-- place
    null,-- progress
    '2020-12-31',-- date_limit
    '2020-12-01',-- date_start
    null,-- date_end
    null,-- request_id
    null,-- team_id
    null,-- next_team_id
    null-- task_status_id
  )
  -- null,-- assets
  -- null-- files_metadata
);

select api.insert_task_asset(
  1,-- task_id
  7-- asset_id
);

select api.remove_task_asset(
  1,-- task_id
  6-- asset_id
);

select api.insert_task_supply(
  1,-- task_id
  1,-- supply_id
  1-- qty
);

select api.insert_task_supply(
  1,-- task_id
  2,-- supply_id
  1-- qty
);

select api.modify_task_supplies(
  1,-- task_id
  array[
    (
      null,-- task_id
      2,-- supply_id
      2-- qty
    )::task_supplies
  ]
);

-- task_event_id = 8
select api.send_task(
  (
    null,
    1,-- task_id
    null,-- event_name
    null,-- event_time
    null,-- person_id
    2,-- team_id
    3,-- next_team_id
    null,-- task_status_id
    'Após definição dos suprimentos.',-- note
    null,
    null,
    null
  )
);

-- commit transaction
commit transaction;

-- begin transaction and set person_id = 3;
begin transaction;
set local cookie.session.person_id to 3;

-- task_event_id = 9
select api.receive_task(
  (
    null,
    1,-- task_id
    null,-- event_name
    null,-- event_time
    null,-- person_id
    3,-- team_id
    null,-- next_team_id
    4,-- task_status_id
    null,-- note
    null,
    null,
    null
  )
);

-- commit transaction
commit transaction;

-- begin transaction and set person_id = 3;
begin transaction;
set local cookie.session.person_id to 3;

-- task_event_id = 10
select api.insert_task_note(
  (
    null,
    1,-- task_id
    null,-- event_name
    null,-- event_time
    null,-- person_id
    3,-- team_id
    null,-- next_team_id
    null,-- task_status_id
    'Aguardando chegada de material.',-- note
    null,
    null,
    null
  )
);

-- commit transaction
commit transaction;

-- begin transaction and set person_id = 3;
begin transaction;
set local cookie.session.person_id to 3;

select api.remove_task_note(
  10
);

-- commit transaction
commit transaction;

-- begin transaction and set person_id = 3;
begin transaction;
set local cookie.session.person_id to 3;

select api.insert_task_note(
  (
    null,
    1,-- task_id
    null,-- event_name
    null,-- event_time
    null,-- person_id
    3,-- team_id
    null,-- next_team_id
    null,-- task_status_id
    'Aguardando a chegada de material.',-- note
    null,
    null,
    null
  )
);

-- commit transaction
commit transaction;

-- begin transaction and set person_id = 3;
begin transaction;
set local cookie.session.person_id to 3;

select api.modify_task_note(
  (
    null,
    1,-- task_id
    null,-- event_name
    null,-- event_time
    null,-- person_id
    3,-- team_id
    null,-- next_team_id
    null,-- task_status_id
    'Aguardando chegada dos materiais.',-- note
    null,
    null,
    null
  )
);


-- DEPOT LIFECYCLE API
-- depot_id = 2, box_id = 2
select api.insert_depot (
  (
    null,-- depot_id
    'ARP20200022',-- depot_sf
    null,-- created_at
    null,-- updated_at
    null,-- created_by
    null,-- updated_by
    3,-- depot_category_id
    '2020-02-01',-- date_sign
    '2019-12-31',-- date_pub
    '2020-03-01',-- date_start
    '2021-02-28',-- date_end
    'Vencedora da Licit Ltda.',-- company
    'ARP de materiais e serviços',-- title
    'Para reformas em gabinetes do SF',-- description
    null,-- url
    '00200.999999/2020-99',-- sigad
    null-- box_id
  ),
  'Nova ARP contratada.'
);

-- supply_id = 4
select api.insert_supply (
  (
    null,-- supply_id
    'A1',-- supply_sf
    2,-- box_id
    1,-- spec_id
    100,-- qty_initial
    9.99-- price
  )
);

-- supply_id = 5
select api.insert_supply (
  (
    null,-- supply_id
    'B1',-- supply_sf
    2,-- box_id
    2,-- spec_id
    100,-- qty_initial
    9.99-- price
  )
);

select api.remove_supply (
  5
);

select api.set_active_box (
  2,
  2
);

-- new box id = 3, supply_id = 6
select api.insert_box (
  2,-- depot_id
  '2022-02-28',-- date_end
  '1TA',-- box_sf
  'Primeiro Termo Aditivo assinado.'-- note
);

select api.modify_supply (
  (
    6,-- supply_id
    'A1',-- supply_sf
    null,-- box_id
    1,-- spec_id
    111,-- qty_initial
    19.90-- price
  )
);

-- depot_id = 3, box_id = 4
select api.insert_depot (
  (
    null,-- depot_id
    'Em licitação',-- depot_sf
    null,-- created_at
    null,-- updated_at
    null,-- created_by
    null,-- updated_by
    1,-- depot_category_id
    null,-- date_sign
    null,-- date_pub
    null,-- date_start
    null,-- date_end
    'null',-- company
    'Futura ARP de materiais e serviços',-- title
    'Para reforma da Residência Oficial',-- description
    null,-- url
    '00200.111222/2020-33',-- sigad
    null-- box_id
  ),
  'Contratação em andamento.'
);

select api.modify_depot (
  (
    3,
    'ARP-15-2020',-- depot_sf
    null,-- created_at
    null,-- updated_at
    null,-- created_by
    null,-- updated_by
    3,-- depot_category_id
    '2020-10-10',-- date_sign
    '2020-10-11',-- date_pub
    '2020-10-22',-- date_start
    '2021-10-21',-- date_end
    'Empresa ARP XYZ',-- company
    'ARP de materiais e serviços',-- title
    'Para reforma da Residência Oficial',-- description
    null,-- url
    '00200.111222/2020-33',-- sigad
    null-- box_id
  )
);

select api.set_active_box (
  3,
  4
);

select api.unset_active_box (
  3
);

-- commit transaction
commit transaction;