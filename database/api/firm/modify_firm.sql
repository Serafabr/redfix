\set function_name api.modify_firm

drop function if exists :function_name;
create or replace function :function_name (
  in "firmId" integer,
  in "name" text,
  in "cnpj" text,
  in "nameRs" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      update firms as f set (
        name,
        name_rs,
        cnpj
      ) = (select new_values.*)
      from (select
        "name",
        "nameRs",
        "cnpj"
      ) as new_values
      where f.firm_id = "firmId";
      id = "firmId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`firmId` of the new firm\n') as new_comment \gset

comment on function :function_name is :'new_comment';
