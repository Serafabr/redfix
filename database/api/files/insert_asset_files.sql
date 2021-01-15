\set function_name api.insert_asset_files

drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  in files_metadata files[],
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      perform insert_files(files_metadata);
      insert into asset_files
        select  "assetId",
                f.uuid
        from unnest(files_metadata) as f;
      id = "specId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `assetId`\n
* `filesMetadata.filename`\n
* `filesMetadata.uuid`\n
* `filesMetadata.size`\n
\n
Output `id`: the same as `assetId` input
';

grant execute on function :function_name to coordinator, supervisor, inspector, employee;
