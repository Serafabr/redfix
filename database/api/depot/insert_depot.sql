drop function if exists api.insert_depot;

create or replace function api.insert_depot (
  in attributes depots,
  in note text,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into depots values (
        default,
        attributes.depot_sf,
        now(),
        now(),
        get_person_id(),
        get_person_id(),
        attributes.depot_category_id,
        attributes.date_sign,
        attributes.date_pub,
        attributes.date_start,
        attributes.date_end,
        attributes.company,
        attributes.title,
        attributes.description,
        attributes.url,
        attributes.sigad,
        null
      ) returning depot_id into id;

      insert into boxes values (
        default,
        '',
        id,
        now(),
        get_person_id(),
        note
      );

    end;
  $$
;

comment on function api.insert_depot is E'
Input fields (* are mandatory):\n
- attributes.depotSf *\n
- attributes.depotCategoryId *\n
- attributes.dateSign\n
- attributes.datePub\n
- attributes.dateStart\n
- attributes.dateEnd\n
- attributes.company *\n
- attributes.title *\n
- attributes.description *\n
- attributes.url\n
- attributes.sigad\n
- note
';
