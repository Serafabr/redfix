\set tested_mutation api.create_project

select api.create_project(
  'Nome do novo projeto',
  true
) as new_project_id, :mutation_ok + 1 as mutation_ok \gset

select api.create_project(
  'Nome do projeto que vai ser removido',
  true
) as project_to_be_removed \gset

\set all_mutations :all_mutations:tested_mutation,
