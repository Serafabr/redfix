\set function_name api.upload_plan_files

drop function if exists :function_name;
create or replace function :function_name (
  in "planId" integer,
  in files_metadata files[],
  out id integer
)
  language plpgsql
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

grant execute on function :function_name to supervisor;

select generate_api_documentation(:'function_name',E'the same as `planId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
