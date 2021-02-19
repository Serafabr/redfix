\set function_name api.insert_spec_version

drop function if exists :function_name;
create or replace function :function_name (
  in "specId" integer,
  in "version" text,
  out id integer
)
  language plpgsql
  as $$
    declare
      new_version alias for "version";
    begin
      -- copy data from old version
      insert into specs (
        -- spec_id is ommitted so it uses the default (sequential integer value)
        spec_sf,
        version,
        name,
        spec_category_id,
        spec_subcategory_id,
        unit,
        spec_composition_id,
        description,
        materials,
        services,
        activities,
        qualification,
        notes,
        criteria,
        spreadsheets,
        lifespan,
        commercial_refs,
        external_refs,
        old_refs,
        is_subcontractable,
        catmat,
        catser,
        created_at,
        updated_at,
        created_by,
        updated_by
      ) select
        -- spec_id is ommitted so it uses the default (sequential integer value)
        z.spec_sf,
        new_version, -- input by user
        z.name,
        z.spec_category_id,
        z.spec_subcategory_id,
        z.unit,
        z.spec_composition_id,
        z.description,
        z.materials,
        z.services,
        z.activities,
        z.qualification,
        z.notes,
        z.criteria,
        z.spreadsheets,
        z.lifespan,
        z.commercial_refs,
        z.external_refs,
        z.old_refs,
        z.is_subcontractable,
        z.catmat,
        z.catser,
        now(),
        now(),
        get_person_id(),
        get_person_id()
      from specs as z where z.spec_id = "specId"
      returning spec_id into id;
      -- files metadata must be copied too
      insert into spec_files
      select  id,
              sf.uuid
      from spec_files as sf
      where sf.spec_id = "specId";
    end;
  $$
;

grant execute on function :function_name to coordinator;

select generate_api_documentation(:'function_name',E'`specId` of the new spec version\n') as new_comment \gset

comment on function :function_name is :'new_comment';
