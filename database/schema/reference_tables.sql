-- task statuses
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
  (7, 'Concluída', true);

-- task priorities
create table task_priorities (
  task_priority_id integer primary key,
  task_priority_text text not null
);

insert into task_priorities values
  (1, 'Baixa'),
  (2, 'Normal'),
  (3, 'Alta'),
  (4, 'Urgente');

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
  (15, 'Vidraçaria');

-- person roles
create table person_roles (
 person_role text primary key
);

insert into person_roles values
  ('administrator'),
  ('supervisor'),
  ('inspector'),
  ('employee'),
  ('visitor');

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
  (9, 'Ferramentas e Equipamentos');

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
  (8, 76, 'Equipamentos de Proteção Individual');

-- create table rule_categories (
--   rule_category_id integer primary key,
--   rule_category_text text not null
-- );

-- insert into rule_categories values
--   (1, 'Leis e Decretos'),
--   (2, 'Normas do Ministério do Trabalho'),
--   (3, 'Acórdãos do TCU'),
--   (4, 'Referências Nacionais'),
--   (5, 'Referências Internacionais'),
--   (6, 'Normas ABNT'),
--   (7, 'Diretrizes do Senado Federal');

create table depot_categories (
  depot_category_id integer primary key,
  depot_category_text text not null
);

insert into depot_categories values
  (1, 'Processo de licitação'),
  (2, 'Contrato'),
  (3, 'ARP'),
  (4, 'Nota Fiscal');
