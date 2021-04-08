\set function_name api.modify_monitor

drop function if exists :function_name;
create or replace function :function_name (
  in "monitorId" integer,
  in "NAME" text,
  in "DESCRIPTION" text,
  in "monitorCategoryId" integer,
  in "UNIT" text,
  in "assetId" integer,
  in "lowerLimit" numeric default null,
  in "upperLimit" numeric default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update monitors set
        updated_at = now(),
        updated_by = get_person_id(),
        name = "NAME",
        description = "DESCRIPTION",
        monitor_category_id = "monitorCategoryId",
        unit = "UNIT",
        asset_id = "assetId",
        lower_limit = "lowerLimit",
        upper_limit = "upperLimit"
      where monitor_id = "monitorId";
      id = "monitorId";
    end;
  $$
;

grant execute on function :function_name to supervisor;

select generate_api_documentation(:'function_name',E'`monitorId` of the modified monitor\n') as new_comment \gset

comment on function :function_name is :'new_comment';
