\set function_name api.modify_billing

drop function if exists :function_name;
create or replace function :function_name (
  in "billingId" integer,
  in "DESCRIPTION" text,
  in "dateStart" date,
  in "dateEnd" date,
  in "datePayment" date default null,
  in "AMOUNT" numeric default null,
  in "NOTE" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update billings set
        description = "DESCRIPTION",
        date_start = "dateStart",
        date_end = "dateEnd",
        date_payment = "datePayment",
        amount = "AMOUNT",
        note = "NOTE"
      where billing_id = "billingId";
      id = "billingId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'the same as `billingId` input\n') as new_comment \gset

comment on function :function_name is :'new_comment';
