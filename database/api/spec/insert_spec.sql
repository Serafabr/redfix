\set function_name api.insert_spec

drop function if exists :function_name;
create or replace function :function_name (
  in attributes specs,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      insert into specs values (
        default,
        attributes.spec_sf,
        attributes.version,
        attributes.name,
        attributes.spec_category_id,
        attributes.spec_subcategory_id,
        attributes.unit,
        attributes.spec_composition_id,
        attributes.description,
        attributes.materials,
        attributes.services,
        attributes.activities,
        attributes.qualification,
        attributes.notes,
        attributes.criteria,
        attributes.spreadsheets,
        attributes.lifespan,
        attributes.commercial_refs,
        attributes.external_refs,
        attributes.old_refs,
        attributes.is_subcontractable,
        attributes.catmat,
        attributes.catser,
        now(),
        now(),
        get_person_id(),
        get_person_id()
      ) returning spec_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `attributes.specSf`\n
* `attributes.version`\n
* `attributes.name`\n
* `attributes.specCategoryId`\n
* `attributes.specSubcategoryId`\n
* `attributes.unit`\n
* `attributes.specCompositionId`\n
\n
Output `id`: `specId` of the new spec
';

grant execute on function :function_name to coordinator;
