\set tested_mutation api.delete_task_note

select api.delete_task_note(
  :new_task_event_id
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
