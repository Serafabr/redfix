\set tested_mutation api.delete_project

select api.create_project(
  'Nome do projeto que vai ser removido',
  true
) as project_to_be_deleted \gset

select api.delete_project(
  :project_to_be_deleted
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
