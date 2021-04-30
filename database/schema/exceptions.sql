create table exceptions (
  errcode integer primary key check (errcode::text ~ '\d{3}'),
  message text not null,
  detail text default '',
  hint text default ''
);

insert into exceptions values
  -- asset api (errcodes 101 to 199)
  (101, 'Localização do ativo deve ser um endereçamento'),
  (102, 'Ativo-categoria deve estar no topo da hierarquia'),
  (103, 'Categoria inválida para equipamento'),
  (104, 'Ativo-filho não pode ser igual ao ativo-pai'),
  -- task api (errcodes 201 to 299)
  (201, 'Tarefa deve estar vinculada a pelo menos um ativo'),
  (202, 'Suprimento não pertence a uma caixa ativa'),
  (203, 'Erro ao criar evento da tarefa'),
  (204, 'Usuário não é o dono da mensagem'),
  (205, 'Projeto inválido'),
  (206, 'Tarefa não concluída não pode ser adicionada a um faturamento'),
  -- depot api (codes 301 to 399)
  (301, 'Suprimento não pode ser removido pois está vinculado a alguma(s) tarefa(s)'),
  (302, 'Somente podem ser ativadas as caixas de um estoque formalizado'),
  -- purchase api (codes 401 to 499)
  (401, 'Alocação inválida (nenhuma caixa definida)'),
  -- plan api (codes 501 to 599)
  (501, 'Rotina com periodicidade definida não permite executar create_task_from_template'),
  -- team api (codes 601 to 699)
  (601, 'Usuário não pertence à equipe'),
  (602, 'Usuário não está em uma equipe')
;
