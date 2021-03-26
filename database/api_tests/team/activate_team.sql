\set tested_mutation api.activate_team

select api.activate_team(
  :new_team_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
