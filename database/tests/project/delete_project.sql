\set tested_mutation api.delete_project

select api.delete_project(
  :project_to_be_removed
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
