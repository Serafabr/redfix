\set tested_mutation api.deactivate_project

select api.deactivate_project(
  :new_project_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
