\set function_name api.insert_plan_files

drop function if exists :function_name;
create or replace function :function_name (
  in "planId" integer,
  in files_metadata files[],
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      perform insert_files(files_metadata);
      insert into plan_files
        select  "planId",
                f.uuid
        from unnest(files_metadata) as f;
      id = "planId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `planId`\n
* `filesMetadata.filename`\n
* `filesMetadata.uuid`\n
* `filesMetadata.size`\n
\n
Output `id`: the same as `planId` input
';

grant execute on function :function_name to coordinator, supervisor;
