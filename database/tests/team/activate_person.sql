select api.activate_person(
  :new_person_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset
