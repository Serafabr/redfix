\set function_name generate_api_documentation

drop function if exists :function_name;
create or replace function :function_name (
  in operation text, -- operation is the schema-qualified name of the function
  in first_part text,
  out output_text text
)
  language plpgsql
  strict
  as $$
    declare
      operation_name alias for operation;
    begin
      select
        first_part ||
        E'\nGranted to: \n' ||
        case when x.administrator then E'* administrator\n' else '' end ||
        case when x.coordinator then E'* coordinator\n' else '' end ||
        case when x.supervisor then E'* supervisor\n' else '' end ||
        case when x.inspector then E'* inspector\n' else '' end ||
        case when x.employee then E'* employee\n' else '' end ||
        case when x.visitor then E'* visitor\n' else '' end
      into output_text 
      from api_docs as x
      where x.operation = operation_name;
    end;
  $$
;
