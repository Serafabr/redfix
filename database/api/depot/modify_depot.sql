\set function_name api.modify_depot

drop function if exists :function_name;
create or replace function :function_name (
  in "depotId" integer,
  in "depotSf" text,
  in "depotCategoryId" integer,
  in "title" text,
  in "description" text,
  in "dateSign" date default null,
  in "datePub" date default null,
  in "dateStart" date default null,
  in "dateEnd" date default null,
  in "firmId" integer default null,
  in "url" text default null,
  in "sigad" text default null,
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
        firm_id,
        title,
        description,
        url,
        sigad
      ) = (select new_values.*)
      from (select
        "depotSf",
        now(),
        get_person_id(),
        "depotCategoryId",
        "dateSign",
        "datePub",
        "dateStart",
        "dateEnd",
        "firmId",
        "title",
        "description",
        "url",
        "sigad"
      ) as new_values
      where d.depot_id = "depotId";
      insert into depot_events values (
        default,
        "depotId",
        'modify_depot'::depot_event_enum,
        now(),
        get_person_id(),
        'Modificação do estoque'
      );
      id = "depotId";
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`depotId` of the modified depot\n') as new_comment \gset

comment on function :function_name is :'new_comment';
