\set function_name api.set_task_date_end

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "dateEnd" timestamptz,
  out id integer
)
  language plpgsql
  as $$
    declare
      "personId" constant integer = get_person_id();
      "teamId" constant integer = get_team_id();
      "newStatus" constant integer = 7;
    begin
      if ("dateEnd" > now())
        then perform raise_exception(205);
      end if;
      update tasks set
        task_status_id = "newStatus",
        date_end = "dateEnd"
      where task_id = "taskId";
      insert into task_events values (
        default,
        "taskId",
        'status',
        now(),
        "personId",
        "teamId",
        null,
        "newStatus",
        'Alteração de status: execução concluída em ' || to_char("dateEnd",'DD/MM/YYYY'),
        null,
        null,
        true
      );
      id = "taskId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `taskId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
