\set tested_mutation api.modify_team

select api.modify_team(
  :new_team_id,
  'Novo nome da equipe :)'
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
