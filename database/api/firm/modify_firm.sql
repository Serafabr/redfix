\set function_name api.modify_firm

drop function if exists :function_name;
create or replace function :function_name (
  in "firmId" integer,
  in "NAME" text,
  in "CNPJ" text,
  in "nameRs" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update firms set
        name = "NAME",
        name_rs = "nameRs",
        cnpj = "CNPJ"
      where firm_id = "firmId";
      id = "firmId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`firmId` of the new firm\n') as new_comment \gset

comment on function :function_name is :'new_comment';
