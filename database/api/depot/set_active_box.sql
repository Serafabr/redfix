drop function if exists api.set_active_box;

create or replace function api.set_active_box (
  in depot_id integer,
  in box_id integer,
  out id integer
)
  language plpgsql
  as $$
    declare
      did integer;
      bid integer;
    begin
      did = depot_id;
      bid = box_id;
      update depots as d set box_id = bid where d.depot_id = did returning d.depot_id into id;
      perform refresh_active_boxes();
    end;
  $$
;

comment on function api.set_active_box is E'
Input fields (* are mandatory):\n
- depotId *\n
- boxId *
';
