select api.insert_team_person (
  :new_team_id,
  :new_person_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

-- add administrator to the new team to allow other tests
select api.insert_team_person (
  :new_team_id,
  get_person_id()
) as not_used_output \gset
