\set tested_mutation api.set_my_team

select api.set_my_team(
  :new_team_id
) as not_used_output \gset

select api.set_my_team (
  1
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
