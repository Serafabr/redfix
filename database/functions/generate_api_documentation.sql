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
        case when (privileges->'administrator')::boolean then E'* administrator\n' else '' end ||
        case when (privileges->'supervisor')::boolean then E'* supervisor\n' else '' end ||
        case when (privileges->'inspector')::boolean then E'* inspector\n' else '' end ||
        case when (privileges->'employee')::boolean then E'* employee\n' else '' end ||
        case when (privileges->'visitor')::boolean then E'* visitor\n' else '' end
      ) into documentation
      from api_docs as ad
      where ad.operation_name = op_name;
    end;
  $$
;
