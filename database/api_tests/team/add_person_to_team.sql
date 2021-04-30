\set tested_mutation api.add_person_to_team

select api.add_person_to_team(
  :new_team_id,
  :new_person_id
) as not_used_output \gset

-- add administrator to the new team to allow other tests
select api.add_person_to_team (
  :new_team_id,
  get_person_id()
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
