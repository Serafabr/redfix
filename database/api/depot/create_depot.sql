\set function_name api.create_depot

drop function if exists :function_name;
create or replace function :function_name (
  in "depotSf" text,
  in "depotCategoryId" integer,
  in "name" text,
  in "description" text,
  in "parentId" integer default null,
  in "firmId" integer default null,
  in "materialDefaultBdi" numeric default 0,
  in "serviceDefaultBdi" numeric default 0,
  in "dateSign" date default null,
  in "datePub" date default null,
  in "dateStart" date default null,
  in "dateEnd" date default null,
  in "url" text default null,
  in "sigad" text default null,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into depots values (
        default,
        "depotSf",
        "depotCategoryId",
        "name",
        "description",
        false,
        "parentId",
        "firmId",
        "materialDefaultBdi",
        "serviceDefaultBdi",
        "dateSign",
        "datePub",
        "dateStart",
        "dateEnd",
        "url",
        "sigad"
      ) returning depot_id into id;
      insert into depot_events values (
        default,
        id,
        'creation',
        now(),
        get_person_id(),
        'Criação do estoque'
      );
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector;

select generate_api_documentation(:'function_name',E'`depotId` of the new depot\n') as new_comment \gset

comment on function :function_name is :'new_comment';
