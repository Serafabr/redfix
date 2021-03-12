\set tested_mutation api.create_task_note

select api.create_task_note(
  :new_task_id,
  :new_team_id,
  'Mensagem para a tarefa',
  null
) as new_task_event_id, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
