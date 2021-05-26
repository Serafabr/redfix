\set tested_mutation api.modify_task_note

select api.modify_task_note(
  :new_task_event_id,
  'Mensagem editada'
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
