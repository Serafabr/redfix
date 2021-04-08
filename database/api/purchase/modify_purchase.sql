\set function_name api.modify_purchase

drop function if exists :function_name;
create or replace function :function_name (
  in "purchaseId" integer,
  in "description" text,
  in "purchaseStart" date default null,
  in "purchaseEnd" date default null,
  in "note" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update purchases as p set (
        description,
        purchase_start,
        purchase_end,
        note
      ) = (select new_values.*)
      from (select
        "description",
        "purchaseStart",
        "purchaseEnd",
        "note"
      ) as new_values
      where p.purchase_id = "purchaseId";
      id = "purchaseId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `purchaseId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
