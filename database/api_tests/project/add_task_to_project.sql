\set tested_mutation api.add_task_to_project

select api.add_task_to_project(
  :new_task_id,
  :new_project_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
