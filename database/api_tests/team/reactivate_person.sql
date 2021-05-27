\set tested_mutation api.reactivate_person

select api.reactivate_person(
  :new_person_id,
  'supervisor'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
