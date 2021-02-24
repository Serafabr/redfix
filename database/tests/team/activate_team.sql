select api.activate_team(
  :new_team_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
