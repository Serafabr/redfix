\set tested_mutation api.activate_project

select api.activate_project(
  :new_project_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
