-- asset categories
create table asset_categories (
  asset_category_id integer primary key,
  asset_category_text text not null,
  description text
);

insert into asset_categories values
  (:'asset_category_facility'::integer, 'Complexo Arquitetônico do Senado Federal', 'Descrição do CASF.'),
  (:'asset_category_electric'::integer, 'Sistema elétrico', 'Descrição do sistema elétrico.'),
  (:'asset_category_air'::integer, 'Sistema de climatização', null),
  (:'asset_category_hydro'::integer, 'Sistema hidráulico', null)
;

-- task statuses
create table task_statuses (
  task_status_id integer primary key generated by default as identity,
  task_status_text text not null,
  is_locked boolean not null
);

insert into task_statuses values
  (default, 'Fila de espera', false), -- 1
  (default, 'Pendente', false),       -- 2
  (default, 'Em execução', false),    -- 3
  (default, 'Suspensa', false),       -- 4
  (default, 'Em análise', true),      -- 5
  (default, 'Cancelada', true),       -- 6
  (default, 'Concluída', true)        -- 7
;

-- task priorities
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

-- task categories
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

-- person roles
create table person_roles (
 person_role text primary key, -- because role names must be strings
 person_role_text text not null
);

insert into person_roles values
  ('administrator', 'Administrador'),
  ('coordinator', 'Chefe do SEDACOPE'),
  ('supervisor', 'Servidor da SINFRA'),
  ('inspector', 'Terceirizado da Fiscalização'),
  ('employee', 'Terceirizado da Manutenção'),
  ('visitor', 'Visitante')
;

-- spec categories
create table spec_categories (
  spec_category_id integer primary key,
  spec_category_text text not null
);

insert into spec_categories values
  (1, 'Geral'),
  (2, 'Serviços de Apoio'),
  (3, 'Civil'),
  (4, 'Hidrossanitário'),
  (5, 'Elétrica'),
  (6, 'Ar-condicionado'),
  (7, 'Marcenaria'),
  (8, 'Rede e Telefonia'),
  (9, 'Ferramentas e Equipamentos')
;

-- spec subcategories
create table spec_subcategories (
  spec_category_id integer not null references spec_categories (spec_category_id),
  spec_subcategory_id integer primary key,
  spec_subcategory_text text not null
);

insert into spec_subcategories values
  (1, 1, 'Equipe de Dedicação Exclusiva'),
  (1, 2, 'Serviços Técnicos'),
  (1, 3, 'Serviços Preliminares'),
  (1, 4, 'Segurança do Trabalho'),
  (1, 5, 'Limpeza'),
  (2, 6, 'Furos'),
  (2, 7, 'Estrutural'),
  (2, 8, 'Impermeabilização'),
  (2, 9, 'Vedações'),
  (2, 10, 'Revestimentos'),
  (2, 11, 'Pinturas'),
  (2, 12, 'Pisos'),
  (2, 13, 'Mármores e Granitos'),
  (2, 14, 'Divisórias'),
  (2, 15, 'Forros'),
  (2, 16, 'Carpete'),
  (2, 17, 'Vidro Comum'),
  (2, 18, 'Espelho'),
  (2, 19, 'Vidro Temperado'),
  (2, 20, 'Persianas'),
  (2, 21, 'Película'),
  (2, 22, 'Estruturas'),
  (2, 23, 'Aditivos'),
  (2, 24, 'Acessibilidade'),
  (2, 25, 'Equipe de Dedicação Exclusiva'),
  (2, 26, 'Vidro - Outros'),
  (3, 27, 'Tubos'),
  (3, 28, 'Registros e Válvulas'),
  (3, 29, 'Ralos e caixas'),
  (3, 30, 'Louças'),
  (3, 31, 'Metais'),
  (3, 32, 'Acessibilidade'),
  (3, 33, 'Acessórios'),
  (3, 34, 'Furos, Rasgos e Escariação'),
  (3, 35, 'Pisos, Revestimentos e Pavimentação'),
  (3, 36, 'Serviços Preliminares de Implantação e Apoio'),
  (3, 37, 'Serviços de Escavação e Reaterro'),
  (3, 38, 'Paisagismo'),
  (4, 39, 'Infraestrutura'),
  (4, 40, 'Interruptores e Tomadas'),
  (4, 41, 'Iluminação'),
  (4, 42, 'Condutores'),
  (4, 43, 'Quadros'),
  (5, 44, 'Equipamentos Terminais e Unitários'),
  (5, 45, 'Exaustores'),
  (5, 46, 'Dutos'),
  (5, 47, 'Difusores E Grelhas'),
  (5, 48, 'Acessórios Para Equipamentos Unitários'),
  (5, 49, 'Válvulas'),
  (5, 50, 'Tubos e isolamento térmico'),
  (6, 51, 'Armários'),
  (6, 52, 'Portas'),
  (6, 53, 'Ferragens'),
  (6, 54, 'Materiais Para Lustração'),
  (6, 55, 'Acabamento'),
  (6, 56, 'Rodízios'),
  (6, 57, 'Persianas'),
  (6, 58, 'Cortinas'),
  (6, 59, 'Colas e Espuma Expansiva'),
  (6, 60, 'Laminados'),
  (6, 61, 'Compensados'),
  (6, 62, 'Madeira Bruta'),
  (6, 63, 'Painéis MDF'),
  (6, 64, 'Perfis e Chapas em Aço e Ferro'),
  (6, 65, 'Tubos'),
  (6, 66, 'Telas e Arames em Aço'),
  (6, 67, 'Consumível'),
  (6, 68, 'Equipe de Dedicação Exclusiva'),
  (7, 69, 'Rede'),
  (7, 70, 'Telefonia'),
  (8, 71, 'Uso Geral'),
  (8, 72, 'Marcenaria'),
  (8, 73, 'Serralheria'),
  (8, 74, 'Civil'),
  (8, 75, 'Uniformes'),
  (8, 76, 'Equipamentos de Proteção Individual')
;

create table spec_compositions (
  spec_composition_id integer primary key,
  spec_composition_text text not null
);

insert into spec_compositions values
  (1, 'Material'),
  (2, 'Mão-de-obra'),
  (3, 'Serviço (Material + Mão-de-obra')
;

create table depot_categories (
  depot_category_id integer primary key,
  depot_category_text text not null,
  is_activatable boolean not null
);

insert into depot_categories values
  (1, 'Processo de licitação', false),
  (2, 'Contrato', true),
  (3, 'ARP', true)
;

create table periodicities (
  periodicity_id integer primary key,
  periodicity_text text not null,
  periodicity_definition text
);

insert into periodicities values
  (0, 'Sob demanda', null),
  (1, 'Diária', null),
  (7, 'Semanal', null),
  (15, 'Quinzenal', null),
  (30, 'Mensal', null),
  (60, 'Bimestral', null),
  (90, 'Trimestral', null),
  (180, 'Semestral', null),
  (365, 'Anual', null),
  (730, 'Bienal', null)
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

create table spec_units (
  spec_unit_id integer primary key,
  spec_unit_text text not null,
  dimensions integer not null
);

insert into spec_units values
  (1, 'L', 1),
  (2, 'm', 1),
  (3, 'm²', 2),
  (4, 'm³', 3),
  (5, 'kg', 1),
  (6, 'hh', 1),
  (7, 'un.', 1),
  (8, 'pç.', 1),
  (9, 'par', 1),
  (10, 'Frasco de 150 mL', 1),
  (11, 'Frasco de 500 mL com aplicador', 1),
  (12, 'Pacote de 900 mL', 1),
  (13, 'Saco de 20 kg', 1),
  (14, 'Saco de 40 kg', 1),
  (15, 'Saco de 50 kg', 1),
  (16, 'Rolo com 40 espiras', 1),
  (17, 'unidade x mês', 1),
  (18, 'metro linear', 1),
  (19, 'm x mês', 1),
  (20, 'm² x mês', 2),
  (21, 'm³ / km', 3),
  (22, 'conj x mês', 1),
  (23, 'Profissional', 1),
  (24, 'Dia de uso efetivo', 1)
;

create table monitor_categories (
  monitor_category_id integer primary key,
  monitor_category_text text not null
);

insert into monitor_categories values
  (1, 'Acumulador'),
  (2, 'Valor instantâneo')
;
