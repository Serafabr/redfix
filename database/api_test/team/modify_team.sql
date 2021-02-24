select api.modify_team(
  :new_team_id,
  'Novo nome da equipe :)'
), :mutation_ok + 1 as mutation_ok \gset
