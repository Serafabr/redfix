-- resend (after cancel_send_task)
select api.send_task(
  :new_task_id,
  1,
  :new_team_id,
  'Começar imediatamente.'
);

select api.receive_task(
  :new_task_id,
  :new_team_id,
  2
), :mutation_ok + 1 as mutation_ok \gset
