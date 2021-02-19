\set function_name update_api_comments

drop function if exists :function_name;
create or replace function :function_name (
)
  returns void
  language plpgsql
  as $$
    declare
      op record;
      sc_name text;
      op_name text;
      new_comment text;
    begin
      for op in
        select operation, description from api_docs
      loop
        sc_name = split_part(op.operation,'.',1);
        op_name = split_part(op.operation,'.',2);
        select generate_api_documentation(op.operation,op.description) into new_comment;
        execute format('comment on function %I.%I is ''%s''', sc_name, op_name, new_comment);
      end loop;
    end;
  $$
;

select :function_name();
