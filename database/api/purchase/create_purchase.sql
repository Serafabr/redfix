\set function_name api.create_purchase

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in "description" text,
  in "purchaseStart" date default null,
  in "purchaseEnd" date default null,
  in "note" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into purchases values (
        default,
        "depotId",
        "description",
        false,
        "purchaseStart",
        "purchaseEnd",
        "note"
      ) returning purchase_id into id;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`purchaseId` of the new purchase\n') as new_comment \gset

comment on function :function_name is :'new_comment';
