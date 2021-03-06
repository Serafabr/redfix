create table asset_categories (
  asset_category_id integer primary key,
  asset_category_text text not null,
  description text
);

insert into asset_categories values
  (:'asset_category_facility'::integer, 'Localidade', 'Ativos listados no sistema de endereçamentos'),
  (:'asset_category_electric'::integer, 'Elétrica', 'Ativos do sistema elétrico'),
  (:'asset_category_air'::integer, 'Climatização', 'Ativos do sistema de climatização'),
  (:'asset_category_hydro'::integer, 'Hidráulica', 'Ativos do sistema hidráulico')
;

create table asset_statuses (
  asset_status_id integer primary key,
  asset_status_text text not null
);

insert into asset_statuses values
  (1, 'OK'),
  (2, 'Interditado'),
  (3, 'Inoperante'),
  (4, 'Danificado')
;

create table task_statuses (
  task_status_id integer primary key,
  task_status_text text not null,
  is_locked boolean not null
);

insert into task_statuses values
  (1, 'Fila de espera', false),
  (2, 'Pendente', false),
  (3, 'Em execução', false),
  (4, 'Suspensa', false),
  (5, 'Em análise', true),
  (6, 'Cancelada', true),
  (7, 'Executada', true),
  (8, 'Encerrada', true)
;

create table task_priorities (
  task_priority_id integer primary key,
  task_priority_text text not null
);

insert into task_priorities values
  (1, 'Baixa'),
  (2, 'Normal'),
  (3, 'Alta'),
  (4, 'Urgente')
;

create table task_categories (
  task_category_id integer primary key,
  task_category_text text not null
);

insert into task_categories values
  (1, 'Ar-condicionado'),
  (2, 'Elétrica'),
  (3, 'Elevador'),
  (4, 'Avaliação Estrutural'),
  (5, 'Exaustor'),
  (6, 'Forro'),
  (7, 'Geral'), -- ????
  (8, 'Hidrossanitário'),
  (9, 'Infiltração'),
  (10, 'Marcenaria'),
  (11, 'Piso'),
  (12, 'Revestimento'),
  (13, 'Serralheria'),
  (14, 'Vedação'),
  (15, 'Vidraçaria')
;

create table periodicities (
  periodicity_id integer primary key,
  periodicity_text text not null,
  periodicity_days integer,
  days_range integer
);

insert into periodicities values
  (0, 'Sob demanda', null, null),
  (1, 'Diária', 1, 0),
  (7, 'Semanal', 7, 1),
  (15, 'Quinzenal', 15, 2),
  (30, 'Mensal', 30, 7),
  (60, 'Bimestral', 60, 10),
  (90, 'Trimestral', 90, 15),
  (180, 'Semestral', 180, 20),
  (365, 'Anual', 365, 30),
  (730, 'Bienal', 730, 60)
;

create table price_source_types (
  price_source_type_id integer primary key,
  price_source_type_text text not null
);

insert into price_source_types values
  (1, 'SINAP'),
  (2, 'Contrato'),
  (3, 'Proposta de empresa')
;

create table units (
  unit_id integer primary key,
  unit_text text not null,
  dimensions integer not null
);

insert into units values
  (1, 'L', 1),
  (2, 'm', 1),
  (3, 'm²', 2),
  (4, 'm³', 3),
  (5, 'kg', 1),
  (6, 'hh', 1),
  (7, 'un.', 1),
  (8, 'pç.', 1),
  (9, 'par', 1),
  (10, 'frasco de 150 mL', 1),
  (11, 'frasco de 500 mL com aplicador', 1),
  (12, 'pacote de 900 mL', 1),
  (13, 'saco de 20 kg', 1),
  (14, 'saco de 40 kg', 1),
  (15, 'saco de 50 kg', 1),
  (16, 'rolo com 40 espiras', 1),
  (17, 'un. x mês', 1),
  (18, 'metro linear', 1),
  (19, 'm x mês', 1),
  (20, 'm² x mês', 2),
  (21, 'm³ / km', 3),
  (22, 'conj. x mês', 1),
  (23, 'profissional', 1),
  (24, 'dia', 1),
  (25, 'm² x km', 2)
;

create table monitor_categories (
  monitor_category_id integer primary key,
  monitor_category_text text not null
);

insert into monitor_categories values
  (1, 'Acumulador'),
  (2, 'Valor instantâneo')
;

create table depot_categories (
  depot_category_id integer primary key,
  depot_category_text text not null
);

insert into depot_categories values
  (1, 'Contrato/ARP'),
  (2, 'Em licitação'),
  (3, 'Reserva Técnica')
;

create table supply_categories (
  supply_category_id integer primary key,
  supply_category_text text not null
);
  
insert into supply_categories values
  (1, 'Material'),
  (2, 'Serviço')
;

create table alloc_statuses (
  alloc_status_id integer primary key,
  alloc_status_text text not null
);

insert into alloc_statuses values
  (1, 'Alocado'),
  (2, 'Proposto'),
  (3, 'Aprovado')
;
