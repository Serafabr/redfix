\set tested_mutation api.modify_project

select api.modify_project(
  :new_project_id,
  'Nome legal para o projeto',
  'Descrição opcional'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
