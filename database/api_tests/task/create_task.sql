\set tested_mutation api.create_task

select api.create_task(
  array[104,105,106],
  'Manutenção no subsolo do Ed. Principal',
  'Descrição dos serviços',
  1,
  2,
  1,
  1
) as new_task_id \gset

\set all_mutations :all_mutations:tested_mutation,
