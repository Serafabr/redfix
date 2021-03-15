\set tested_mutation api.activate_person

select api.activate_person(
  :new_person_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
