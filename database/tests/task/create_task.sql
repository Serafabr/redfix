select api.create_task(
  array[104,105,106],
  'Manutenção no subsolo do Ed. Principal',
  'Descrição dos serviços',
  1,
  2,
  :new_team_id
) as new_task_id, :mutation_ok + 1 as mutation_ok \gset
