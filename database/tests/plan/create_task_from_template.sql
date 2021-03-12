\set tested_mutation api.create_task_from_template

select api.create_task_from_template(
  :new_task_template_id,
  1
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
