\set tested_mutation api.create_team

select api.create_team(
  'Nome da Equipe',
  'Descrição da equipe'
) as new_team_id, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
