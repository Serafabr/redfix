\set tested_mutation api.clone_task

select api.clone_task(
  :new_task_id,
  :new_team_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
