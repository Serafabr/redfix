\set function_name api.modify_firm

drop function if exists :function_name;
create or replace function :function_name (
  in "firmId" integer,
  in "name" text,
  in "nameRs" text,
  in "cnpj" text,
  out id integer
)
  language plpgsql
  as $$
    declare
      new_name alias for "name";
      new_cnpj alias for "cnpj";
    begin
      update firms set (
        name,
        name_rs,
        cnpj
      ) = (
        new_name,
        "nameRs",
        new_cnpj
      ) where firm_id = "firmId";
      id = "firmId";
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `name`\n
* `cnpj`\n
* `firmId`\n
\n
Output `id`: `firmId` of the new firm
';

grant execute on function :function_name to coordinator, supervisor, inspector;
