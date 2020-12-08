\set function_name api.modify_spec_version

drop function if exists :function_name;
create or replace function :function_name (
  in attributes specs,
  out id integer
)
  language plpgsql
  strict
  as $$
    begin
      update specs as z set (
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
        updated_at,
        updated_by
      ) = (
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
        get_person_id()
      ) where z.spec_id = attributes.spec_id
      returning z.spec_id into id;
    end;
  $$
;

comment on function :function_name is E'
Mandatory input(s):\n
* `attributes.specId`\n
* `attributes.specSf`\n
* `attributes.version`\n
* `attributes.name`\n
* `attributes.specCategoryId`\n
* `attributes.specSubcategoryId`\n
* `attributes.unit`\n
* `attributes.specCompositionId`\n
\n
Output `id`: `specId` of the modified spec
';

grant execute on function :function_name to coordinator;
