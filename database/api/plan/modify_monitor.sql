\set function_name api.modify_monitor

drop function if exists :function_name;
create or replace function :function_name (
  in "monitorId" integer,
  in "name" text,
  in "description" text,
  in "unit" text,
  in "assetId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update monitors as m set (
        updated_at,
        updated_by,
        name,
        description,
        unit,
        asset_id
      ) = (select new_values.*)
      from (select
        now(),
        get_person_id(),
        "name",
        "description",
        "unit",
        "assetId"
      ) as new_values
      where m.monitor_id = "monitorId";
      id = "monitorId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor;

select generate_api_documentation(:'function_name',E'`monitorId` of the modified monitor\n') as new_comment \gset

comment on function :function_name is :'new_comment';
