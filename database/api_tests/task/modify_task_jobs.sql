\set tested_mutation api.modify_task_jobs

select api.modify_task_jobs(
  :new_task_id,
  array[
    (
      'Checklist item 1',
      true
    )::job_type,
    (
      'Item 2 do checklist',
      false
    )::job_type
  ]
) as not_used_output \gset

\set all_mutations :all_mutations:tested_mutation,
