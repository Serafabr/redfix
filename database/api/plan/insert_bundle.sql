\set function_name api.insert_bundle

drop function if exists :function_name;
create or replace function :function_name (
  in "name" text,
  in "description" text,
  out id integer
)
  language plpgsql
  strict
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

comment on function :function_name is E'
Mandatory input(s):\n
* `name`\n
* `description`\n
\n
Output `id`: `bundleId` of the new bundle
';

grant execute on function :function_name to coordinator, supervisor, inspector;
