\set tested_mutation api.remove_task_from_project

select api.remove_task_from_project(
  :new_task_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
