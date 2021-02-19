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
  strict
  as $$
    begin
      update prices set (
        spec_id,
        date,
        price,
        price_source_type_id,
        source
      ) = (
        "specId",
        "date",
        "price",
        "priceSourceTypeId",
        "source"
      ) where price_id = "priceId";
      id = "priceId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'Output `id`: `priceId` of the modified price\n') as new_comment \gset

comment on function :function_name is :'new_comment';
