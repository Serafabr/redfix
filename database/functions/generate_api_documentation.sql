\set function_name generate_api_documentation

drop function if exists :function_name;
create or replace function :function_name (
  in "operationName" text, -- schema-qualified name of the function
  in "responseFieldsDescriptions" text,
  out documentation text
)
  language plpgsql
  strict
  as $$
    begin
      select (
        E'Response field(s):\n' ||
        E'* `id`: ' ||
        "responseFieldsDescriptions" ||
        E'\nGranted to:\n' ||
        case when (privileges->'administrator')::boolean then E'* administrator\n' else '' end ||
        case when (privileges->'supervisor')::boolean then E'* supervisor\n' else '' end ||
        case when (privileges->'inspector')::boolean then E'* inspector\n' else '' end ||
        case when (privileges->'employee')::boolean then E'* employee\n' else '' end ||
        case when (privileges->'visitor')::boolean then E'* visitor\n' else '' end
      ) into documentation
      from api_docs as ad
      where ad.operation_name = "operationName";
    end;
  $$
;
