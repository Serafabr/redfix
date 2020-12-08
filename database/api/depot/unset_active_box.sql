drop function if exists api.unset_active_box;

create or replace function api.unset_active_box (
  in depot_id integer,
  out id integer
)
  language plpgsql
  as $$
    begin
      id = depot_id;
      update depots as d set box_id = null where d.depot_id = id;
      perform refresh_active_boxes();
    end;
  $$
;

comment on function api.unset_active_box is E'
Input fields (* are mandatory):\n
- depotId *
';
