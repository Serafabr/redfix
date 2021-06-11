\set tested_mutation api.modify_task_todos

select api.modify_task_todos(
  :new_task_id,
  array[
    (
      'Checklist item 1',
      true
    )::todo_type,
    (
      'Item 2 do checklist',
      false
    )::todo_type
  ]
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
