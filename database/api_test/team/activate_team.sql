select api.activate_team(
  :new_team_id
), :mutation_ok + 1 as mutation_ok \gset
