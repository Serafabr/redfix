\set function_name api.delete_supply

drop function if exists :function_name;
create or replace function :function_name (
  in "supplyId" integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      delete from supplies as s where s.supply_id = "supplyId";
      id = "supplyId";
    end;
  $$
;

grant execute on function :function_name to coordinator, supervisor, inspector;

select generate_api_documentation(:'function_name',E'`boxId` of the deleted supply\n') as new_comment \gset

comment on function :function_name is :'new_comment';
