select api.activate_person(
  :new_person_id
), :mutation_ok + 1 as mutation_ok \gset
