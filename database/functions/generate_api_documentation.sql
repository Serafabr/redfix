\set function_name generate_api_documentation

drop function if exists :function_name;
create or replace function :function_name (
  in operation_name text,
  in first_part text
)
  returns void
  language plpgsql
  strict
  as $$
    begin
      with x as (
        select * from api_docs where operation = operation_name
      )
      update pg_description as pgd set description = (
        select (
          first_part ||
          E'\nGranted to: \n' ||
          case when x.administrator then E'* administrator\n' else '' end ||
          case when x.coordinator then E'* coordinator\n' else '' end ||
          case when x.supervisor then E'* supervisor\n' else '' end ||
          case when x.inspector then E'* inspector\n' else '' end ||
          case when x.employee then E'* employee\n' else '' end ||
          case when x.visitor then E'* visitor\n' else '' end
        )
      ) from x
      where
        pgd.objoid = x.objoid and
        pgd.classoid = x.classoid and
        pgd.objsubid = x.objsubid
      ;
    end;
  $$
;
