\set function_name api.create_firm

drop function if exists :function_name;
create or replace function :function_name (
  in "name" text,
  in "cnpj" text,
  in "nameRs" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into firms values (
        default,
        "name",
        "nameRs",
        "cnpj"
      ) returning firm_id into id;
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`firmId` of the new firm\n') as new_comment \gset

comment on function :function_name is :'new_comment';
