\set function_name api.insert_depot_files

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in files_metadata files[],
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      perform insert_files(files_metadata);
      insert into depot_files
        select  "depotId",
                f.uuid
        from unnest(files_metadata) as f;
      id = "depotId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `depotId`\n
* `filesMetadata.filename`\n
* `filesMetadata.uuid`\n
* `filesMetadata.size`\n
\n
Output `id`: the same as `depotId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector;
