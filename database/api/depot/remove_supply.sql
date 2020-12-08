drop function if exists api.remove_supply;

create or replace function api.remove_supply (
  in supply_id integer,
  out id integer
)
  language plpgsql
  as $$
    declare
      supid integer;
    begin

      supid = supply_id;

      delete from task_supplies as ts where ts.supply_id = supid;

      delete from supplies as s where s.supply_id = supid returning s.box_id into id;

    end;
  $$
;

comment on function api.remove_supply is E'
Input fields (* are mandatory):\n
- supplyId *
';
