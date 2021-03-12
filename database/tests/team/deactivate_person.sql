\set tested_mutation api.deactivate_person

select api.deactivate_person(
  :new_person_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
