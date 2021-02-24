\set function_name api.insert_price

drop function if exists :function_name;
create or replace function :function_name (
  in "specId" integer,
  in "date" date,
  in "price" numeric,
  in "priceSourceTypeId" integer,
  in "source" text,
  in "firmId" integer default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into prices values (
        default,
        "specId",
        "date",
        "price",
        "priceSourceTypeId",
        "source",
        "firmId",
        true
      ) returning price_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`priceId` of the new price\n') as new_comment \gset

comment on function :function_name is :'new_comment';
