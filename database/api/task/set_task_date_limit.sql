\set function_name api.set_task_date_limit

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "dateLimit" timestamptz,
  out id integer
)
  language plpgsql
  as $$
    begin
      update tasks set date_limit = "dateLimit" where task_id = "taskId";
      -- insert into task_events values (
      --   default,
      --   "taskId",
      --   'modify',
      --   now(),
      --   get_person_id(),
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

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
