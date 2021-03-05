select api.create_team(
  'Nome da Equipe',
  'Descrição da equipe'
) as new_team_id, :mutation_ok + 1 as mutation_ok \gset
