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
    declare
      new_name alias for "name";
      new_unit alias for "unit";
      new_description alias for "description";
    begin
      update monitors set (
        updated_at,
        updated_by,
        name,
        description,
        unit,
        asset_id
      ) = (
        default,
        default,
        new_name,
        new_description,
        new_unit,
        "assetId"
      ) where monitor_id = "monitorId";
      id = "monitorId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor;

select generate_api_documentation(:'function_name',E'`monitorId` of the modified monitor\n') as new_comment \gset

comment on function :function_name is :'new_comment';
