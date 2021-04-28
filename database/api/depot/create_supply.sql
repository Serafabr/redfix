\set function_name api.create_supply

drop function if exists :function_name;
create or replace function :function_name (
  in "supplySf" text,
  in "depotId" integer,
  in "name" text,
  in "unit" integer,
  in "supplyCategoryId" integer,
  in "isInternal" boolean,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into supplies values (
        default,
        "supplySf",
        "depotId",
        "name",
        "unit",
        "supplyCategoryId",
        "isInternal"
      ) returning supply_id into id;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`supplyId` of the new supply\n') as new_comment \gset

comment on function :function_name is :'new_comment';
