\set function_name api.insert_bundle

drop function if exists :function_name;
create or replace function :function_name (
  in "name" text,
  in "description" text,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into bundles values (
        default,
        "name",
        "description"
      ) returning bundle_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: `bundleId` of the new bundle\n') as new_comment \gset

comment on function :function_name is :'new_comment';
