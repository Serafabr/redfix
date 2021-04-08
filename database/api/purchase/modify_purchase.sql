\set function_name api.modify_purchase

drop function if exists :function_name;
create or replace function :function_name (
  in "purchaseId" integer,
  in "DESCRIPTION" text,
  in "purchaseStart" date default null,
  in "purchaseEnd" date default null,
  in "NOTE" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update purchases set
        description = "DESCRIPTION",
        purchase_start = "purchaseStart",
        purchase_end = "purchaseEnd",
        note = "NOTE"
      where purchase_id = "purchaseId";
      id = "purchaseId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `purchaseId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
