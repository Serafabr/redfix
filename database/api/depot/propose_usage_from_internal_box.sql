\set function_name api.propose_usage_from_internal_box

drop function if exists :function_name;
create or replace function :function_name (
  in "taskId" integer,
  in "specId" integer,
  in "internalBoxId" integer,
  in "qtyProposed" numeric,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into task_supplies as ts (
        task_id,
        spec_id,
        internal_box_id,
        qty_proposed
      ) values (
        "taskId",
        "specId",
        "internalBoxId",
        "qtyProposed"
      ) returning ts.usage_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the new`usageId`\n') as new_comment \gset

comment on function :function_name is :'new_comment';
