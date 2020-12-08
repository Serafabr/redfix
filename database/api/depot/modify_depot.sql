\set function_name api.modify_depot

drop function if exists :function_name;
create or replace function :function_name (
  in attributes depots,
  out id integer
)
  language plpgsql
  strict
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

comment on function :function_name is E'
Mandatory input(s):\n
* `attributes.depotId`\n
* `attributes.depotSf`\n
* `attributes.depotCategoryId`\n
* `attributes.company`\n
* `attributes.title`\n
* `attributes.description`\n
\n
Output `id`: `depotId` of the modified depot
';

grant execute on function :function_name to coordinator, supervisor, inspector;
