\set tested_mutation api.remove_person_from_team

select api.remove_person_from_team(
  :new_team_id,
  :new_person_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
