\set function_name api.modify_monitor

drop function if exists :function_name;
create or replace function :function_name (
  in "monitorId" integer,
  in "name" text,
  in "description" text,
  in "monitorCategoryId" integer,
  in "unit" text,
  in "assetId" integer,
  in "lowerLimit" numeric default null,
  in "upperLimit" numeric default null,
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
        monitor_category_id,
        unit,
        asset_id,
        lower_limit,
        upper_limit
      ) = (select new_values.*)
      from (select
        now(),
        get_person_id(),
        "name",
        "description",
        "monitorCategoryId",
        "unit",
        "assetId",
        "lowerLimit",
        "upperLimit"
      ) as new_values
      where m.monitor_id = "monitorId";
      id = "monitorId";
    end;
  $$
;

grant execute on function :function_name to supervisor;

select generate_api_documentation(:'function_name',E'`monitorId` of the modified monitor\n') as new_comment \gset

comment on function :function_name is :'new_comment';
