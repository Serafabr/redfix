drop function if exists api.insert_box;

create or replace function api.insert_box (
  in depot_id integer,
  in date_end date,
  in box_sf text,
  in note text,
  out id integer
)
  language plpgsql
  as $$
    declare
      did integer;
      new_date_end date;
      last_box_id integer;
      new_box_id integer;
    begin

      did = depot_id;
      new_date_end = date_end;

      update depots as d set (
        updated_at,
        updated_by,
        date_end
      ) = (
        now(),
        get_person_id(),
        new_date_end
      ) where d.depot_id = did;

      insert into boxes as b values (
        default,
        box_sf,
        did,
        now(),
        get_person_id(),
        note
      ) returning b.depot_id, b.box_id into id, new_box_id;

      last_box_id = (select box_id from depots as d where d.depot_id = did);
      if last_box_id is null
        then last_box_id = (select max(box_id) from boxes as b where b.depot_id = did);
      end if;

      insert into supplies as s (
        -- omit supply_id column: default value
        supply_sf,
        box_id,
        spec_id,
        qty_initial,
        price
      ) select
        ss.supply_sf,
        new_box_id,
        ss.spec_id,
        ss.qty_initial,
        ss.price
      from supplies as ss where ss.box_id = last_box_id;

    end;
  $$
;

comment on function api.insert_box is E'
Input fields (* are mandatory):\n
- depotId *\n
- dateEnd *\n
- boxSf *\n
- note
';
