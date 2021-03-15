\set function_name api.approve_usage_proposals

drop type if exists usage_approval cascade;
create type usage_approval as (
  usage_id integer,
  qty_approved numeric
);

drop function if exists :function_name;
create or replace function :function_name (
  in "usageApprovals" usage_approval[],
  out id integer
)
  language plpgsql
  as $$
    begin
      update task_supplies as ts set (
        qty_approved
      ) = (
        select ua.qty_approved
      ) from (select unnest("usageApprovals")) as ua
      where ts.usage_id = ua.usage_id;
      id = 1;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`1`\n') as new_comment \gset

comment on function :function_name is :'new_comment';
