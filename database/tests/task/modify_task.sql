\set tested_mutation api.modify_task

select api.modify_task(
  :new_task_id,
  'Manutenção no subsolo do Edifício Principal',
  'Manutenção no subsolo do Edifício Principal',
  1,
  2,
  :new_team_id
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
