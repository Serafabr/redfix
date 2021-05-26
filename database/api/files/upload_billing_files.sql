\set function_name api.upload_billing_files

drop function if exists :function_name;
create or replace function :function_name (
  in "billingId" integer,
  in files_metadata files[],
  out id integer
)
  language plpgsql
  as $$
    begin
      perform insert_files(files_metadata);
      insert into billing_files
        select  "billingId",
                f.uuid
        from unnest(files_metadata) as f;
      id = "billingId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `billingId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
