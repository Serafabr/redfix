\set function_name api.remove_spec_file

drop function if exists :function_name;
create or replace function :function_name (
  in "specId" integer,
  in "uuid" uuid,
  out id integer
)
  language plpgsql
  strict
  as $$
    declare
      fileuuid uuid;
    begin
      fileuuid = "uuid";
      delete from spec_files where spec_id = "specId" and uuid = fileuuid;
      delete from files where uuid = fileuuid;
      id = "specId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `specId`\n
* `uuid`\n
\n
Output `id`: the same as `specId` input
';

grant execute on function :function_name to coordinator;
