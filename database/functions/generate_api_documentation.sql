\set function_name generate_api_documentation

drop function if exists :function_name;
create or replace function :function_name (
  in op_name text, -- op_name is the schema-qualified name of the function
  in output_description text,
  out documentation text
)
  language plpgsql
  strict
  as $$
    begin
      -- build a string describing output and authorized roles of the operation
      select (
        'Output `id`: ' || output_description ||
        E'\nGranted to: \n' ||
        case when ad.administrator then E'* administrator\n' else '' end ||
        case when ad.supervisor then E'* supervisor\n' else '' end ||
        case when ad.inspector then E'* inspector\n' else '' end ||
        case when ad.employee then E'* employee\n' else '' end ||
        case when ad.visitor then E'* visitor\n' else '' end
      ) into documentation
      from api_docs as ad
      where ad.operation_name = op_name;
    end;
  $$
;
