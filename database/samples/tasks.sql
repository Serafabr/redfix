select api.insert_task(
  (
    null,-- task_id
    null,-- created_at
    null,-- updated_at
    null,-- created_by
    null,-- updated_by
    1,-- task_priority_id
    1,-- task_category_id
    null,-- plan_id
    null,-- project_id
    'Manutenção no subsolo do Edifício Principal',-- title
    'Troca de eletrodutos e lâmpadas queimadas',-- description
    'Subsolo do Ed. Principal',-- place
    null,-- progress
    '2020-12-31',-- date_limit
    null,-- date_start
    null,-- date_end
    null,-- request_id
    :'team_id'::integer,-- team_id
    null,-- next_team_id
    null-- task_status_id
  ),
  array[104,105,106]
) as task_id \gset

select api.insert_task_files (
  :'task_id'::integer,
  array[(
    gen_random_uuid(),
    'test.txt',
    50,
    null,
    null
  )]::files[]
);
