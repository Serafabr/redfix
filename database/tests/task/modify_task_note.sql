\set tested_mutation api.modify_task_note

select api.modify_task_note(
  :new_task_event_id,
  'Mensagem editada'
) as not_used_output, :mutation_ok + 1 as mutation_ok \gset

\set all_mutations :all_mutations:tested_mutation,
