\set function_name api.create_billing

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in "DESCRIPTION" text,
  in "dateStart" date,
  in "dateEnd" date,
  in "NOTE" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into billings values (
        default,
        "depotId",
        "DESCRIPTION",
        false,
        "dateStart",
        "dateEnd",
        null,
        null,
        "NOTE"
      ) returning billing_id into id;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`billingId` of the new billing\n') as new_comment \gset

comment on function :function_name is :'new_comment';
