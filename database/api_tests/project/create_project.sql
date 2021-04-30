\set tested_mutation api.create_project

select api.create_project(
  'Nome do novo projeto',
  true
) as new_project_id \gset

\set all_mutations :all_mutations:tested_mutation,
