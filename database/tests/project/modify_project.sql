select api.modify_project(
  :new_project_id,
  'Nome legal para o projeto',
  'Descrição opcional'
), :mutation_ok + 1 as mutation_ok \gset
