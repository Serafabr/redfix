\set function_name api.modify_price

drop function if exists :function_name;
create or replace function :function_name (
  in "priceId" integer,
  in "specId" integer,
  in "PRICE" numeric,
  in "DATE" date,
  in "validDays" integer,
  in "priceSourceTypeId" integer,
  in "firmId" integer default null,
  in "NOTE" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update prices set
        spec_id = "specId",
        price = "PRICE",
        date = "DATE",
        valid_days = "validDays",
        price_source_type_id = "priceSourceTypeId",
        firm_id = "firmId",
        note = "NOTE"
      where price_id = "priceId";
      id = "priceId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`priceId` of the modified price\n') as new_comment \gset

comment on function :function_name is :'new_comment';
