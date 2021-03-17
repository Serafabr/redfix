\set function_name api.modify_price

drop function if exists :function_name;
create or replace function :function_name (
  in "priceId" integer,
  in "specId" integer,
  in "price" numeric,
  in "date" date,
  in "validDays" integer,
  in "priceSourceTypeId" integer,
  in "firmId" integer default null,
  in "note" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update prices as p set (
        spec_id,
        price,
        date,
        valid_days,
        price_source_type_id,
        firm_id,
        note
      ) = (select new_values.*)
      from (select
        "specId",
        "price",
        "date",
        "validDays",
        "priceSourceTypeId",
        "firmId",
        "note"
      ) as new_values
      where p.price_id = "priceId";
      id = "priceId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`priceId` of the modified price\n') as new_comment \gset

comment on function :function_name is :'new_comment';
