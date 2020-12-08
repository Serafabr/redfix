\set function_name api.remove_supply

drop function if exists :function_name;
create or replace function :function_name (
  in "supplyId" integer,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      delete from supplies as s where s.supply_id = "supplyId" returning s.box_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `supplyId`\n
\n
Output `id`: `boxId` of the deleted supply
';

grant execute on function :function_name to coordinator, supervisor, inspector;
