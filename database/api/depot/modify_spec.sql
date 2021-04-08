\set function_name api.modify_spec

drop function if exists :function_name;
create or replace function :function_name (
  in "specId" integer,
  in "specSf" text,
  in "NAME" text,
  in "UNIT" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      update specs set
        spec_sf = "specSf",
        name = "NAME",
        unit = "UNIT"
      where spec_id = "specId";
      id = "specId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`specId` of the new spec\n') as new_comment \gset

comment on function :function_name is :'new_comment';
