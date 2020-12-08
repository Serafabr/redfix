drop function if exists api.modify_depot;

create or replace function api.modify_depot (
  in attributes depots,
  out id integer
)
  language plpgsql
  as $$
    begin
      update depots as d set (
        depot_sf,
        updated_at,
        updated_by,
        depot_category_id,
        date_sign,
        date_pub,
        date_start,
        date_end,
        company,
        title,
        description,
        url,
        sigad
      ) = (
        attributes.depot_sf,
        now(),
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
        attributes.sigad
      ) where d.depot_id = attributes.depot_id
      returning d.depot_id into id;
    end;
  $$
;

comment on function api.modify_depot is E'
Input fields (* are mandatory):\n
- attributes.depotId *\n
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
- attributes.sigad
';