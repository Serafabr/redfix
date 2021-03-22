\set function_name api.insert_depot

drop function if exists :function_name;
create or replace function :function_name (
  in attributes depots,
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
        attributes.sigad
      ) returning depot_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `attributes.depotSf`\n
* `attributes.depotCategoryId`\n
* `attributes.company`\n
* `attributes.title`\n
* `attributes.description`\n
\n
Output `id`: `depotId` of the new depot
';

grant execute on function :function_name to coordinator, supervisor, inspector;