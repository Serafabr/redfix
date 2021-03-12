\set function_name api.create_monitor

drop function if exists :function_name;
create or replace function :function_name (
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
      insert into monitors values (
        default,
        now(),
        now(),
        default,
        default,
        "name",
        "description",
        "monitorCategoryId",
        "unit",
        "assetId",
        "lowerLimit",
        "upperLimit"
      ) returning monitor_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor;

select generate_api_documentation(:'function_name',E'`monitorId` of the new monitor\n') as new_comment \gset

comment on function :function_name is :'new_comment';
