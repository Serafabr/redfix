\set function_name generate_api_documentation

drop function if exists :function_name;
create or replace function :function_name (
  in full_operation_name text, -- 'full': schema-qualified name
  in first_part text,
  out output_text text
)
  language plpgsql
  strict
  as $$
    declare
      operation_name text = split_part(full_operation_name,'.',2);
    begin
      insert into pg_description select
        x.objoid,
        x.classoid,
        x.objsubid,
        first_part ||
        E'\nGranted to: \n' ||
        case when x.administrator then E'* administrator\n' else '' end ||
        case when x.coordinator then E'* coordinator\n' else '' end ||
        case when x.supervisor then E'* supervisor\n' else '' end ||
        case when x.inspector then E'* inspector\n' else '' end ||
        case when x.employee then E'* employee\n' else '' end ||
        case when x.visitor then E'* visitor\n' else '' end
      from api_docs as x
      where x.operation = operation_name
      returning (
        'Documentation for ' || full_operation_name || ' was successfully generated'
      ) into output_text;
    end;
  $$
;
