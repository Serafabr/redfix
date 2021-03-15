\set function_name api.modify_spec

drop function if exists :function_name;
create or replace function :function_name (
  in "specId" integer,
  in "specSf" text,
  in "name" text,
  in "unit" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update specs set (
        spec_sf,
        name,
        unit
      ) = (select new_values.*)
      from (select
        "specSf",
        "name",
        "unit"
      ) as new_values
      where spec_id = "specId";
      id = "specId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`specId` of the new spec\n') as new_comment \gset

comment on function :function_name is :'new_comment';
