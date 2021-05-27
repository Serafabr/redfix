drop table if exists exceptions;
create table exceptions (
  errcode integer primary key check (errcode::text ~ '\d{3}'),
  message text not null,
  detail text default '',
  hint text default ''
);

insert into exceptions values
  -- 101-199: assets
  (101, 'Localização do ativo deve ser um endereçamento'),
  (102, 'Ativo-categoria deve estar no topo da hierarquia'),
  (103, 'Categoria inválida para equipamento'),
  (104, 'Ativo-filho não pode ser igual ao ativo-pai'),
  -- 201-299: tasks and projects
  (201, 'Tarefa deve estar vinculada a pelo menos um ativo'),
  (202, 'Erro ao criar evento da tarefa'),
  (203, 'Usuário não é o dono da mensagem'),
  (204, 'Projeto selecionado não está ativo'),
  (205, 'Data futura não permitida'),
  -- 301-399: depots
  -- 401-399: plans
  (401, 'Rotina com periodicidade definida não permite executar create_task_from_template'),
  -- 501-599: allocations and billings
  (501, 'Alocação inválida'),
  (502, 'Proibido deletar alocação se insumo já foi consumido'),
  -- 601-699: teams and firms
  (601, 'Usuário indefinido'),
  (602, 'Usuário sem equipe definida'),
  (603, 'Usuário não pertence à equipe'),
  (604, 'Equipe desativada')
  -- 701-799: utilities
  -- 801-899: ?
  -- 901-999: others
;
