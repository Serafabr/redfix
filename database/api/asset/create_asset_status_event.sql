\set function_name api.create_asset_status_event

drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  in "createdAt" timestamptz,
  in "assetStatusId" integer,
  in "note" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into asset_events values (
        default,
        "assetId",
        'status',
        "createdAt",
        get_person_id(),
        "assetStatusId",
        "note"
      );
      id = "assetId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector, employee;

select generate_api_documentation(:'function_name',E'the same as `assetId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
