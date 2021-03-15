\set function_name api.create_spec

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in "specSf" text,
  in "name" text,
  in "unit" text,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into specs values (
        default,
        "depotId",
        "specSf",
        "name",
        "unit"
      ) returning spec_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`specId` of the new spec\n') as new_comment \gset

comment on function :function_name is :'new_comment';
