\set function_name api.readjust_contract_prices

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in "validFrom" date,
  in "validTo" date default null,
  -- supplies ids and their new prices and bdi
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into supply_prices (
        supply_id,
        bdi,
        price,
        valid_from,
        valid_to
      ) select
        -- unnest input or select from the database table
        -- unnest input or select from the database table
        -- unnest input or select from the database table
        "validFrom",
        "validTo"
      ;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`1`\n') as new_comment \gset

comment on function :function_name is :'new_comment';
