select api.remove_team_person(
  :new_team_id,
  :new_person_id
), :mutation_ok + 1 as mutation_ok \gset
