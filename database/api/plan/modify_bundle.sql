\set function_name api.modify_bundle

drop function if exists :function_name;
create or replace function :function_name (
  in "bundleId" integer,
  in "name" text,
  in "description" text,
  out id integer
)
  language plpgsql
  strict
  as $$
    declare
      new_name alias for "name";
      new_description alias for "description";
    begin
      update bundles set (
        name,
        description
      ) = (
        new_name,
        new_description
      ) where bundle_id = "bundleId";
      id = "bundleId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: `bundleId` of the new bundle\n') as new_comment \gset

comment on function :function_name is :'new_comment';
