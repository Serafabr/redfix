\set function_name api.modify_price

drop function if exists :function_name;
create or replace function :function_name (
  in "priceId" integer,
  in "specId" integer,
  in "date" date,
  in "price" numeric,
  in "priceSourceTypeId" integer,
  in "source" text,
  out id integer
)
  language plpgsql
  as $$
    begin
      update prices as p set (
        spec_id,
        date,
        price,
        price_source_type_id,
        source
      ) = (select new_values.*)
      from (select
        "specId",
        "date",
        "price",
        "priceSourceTypeId",
        "source"
      ) as new_values
      where p.price_id = "priceId";
      id = "priceId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`priceId` of the modified price\n') as new_comment \gset

comment on function :function_name is :'new_comment';
