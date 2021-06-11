\set function_name api.modify_task_todos

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "TODOS" todo_type[],
  out id integer
)
  language plpgsql
  as $$
    begin
      update tasks set todos = "TODOS" where task_id = "taskId";
      -- insert into task_events values (
      --   default,
      --   "taskId",
      --   'modification',
      --   now(),
      --   "personId",
      --   "teamId",
      --   null,
      --   null,
      --   'Alteração da tarefa',
      --   null,
      --   null,
      --   true
      -- );
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
