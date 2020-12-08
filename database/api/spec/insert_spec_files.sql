\set function_name api.insert_spec_files

drop function if exists :function_name;
create or replace function :function_name (
  in "specId" integer,
  in files_metadata file_metadata[],
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into file_metadata
        select  f.uuid,
                f.filename,
                f.size,
                now(),
                get_person_id()
        from unnest(files_metadata) as f;
      insert into spec_files
        select  "specId",
                f.uuid
        from unnest(files_metadata) as f;
      id = "specId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `specId`\n
* `filesMetadata.filename`\n
* `filesMetadata.uuid`\n
* `filesMetadata.size`\n
\n
Output `id`: the same as `specId` input
';

grant execute on function :function_name to coordinator;
