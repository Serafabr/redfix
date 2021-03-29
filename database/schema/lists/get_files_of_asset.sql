\set function_name get_files_of_asset

drop function if exists :function_name;
create or replace function :function_name (
  in "assetId" integer,
  out list jsonb
)
  language sql
  strict
  stable
  as $$
    select coalesce_list(j.l) as list from (
      select
        jsonb_agg(jsonb_build_object(
          'uuid', f.uuid,
          'filename', f.filename,
          'size', f.size,
          'uploadedAt', f.uploaded_at,
          'personName', p.name
        ) order by f.filename) as l
      from asset_files as af
      inner join files as f using (uuid)
      inner join persons as p using (person_id)
      where af.asset_id = "assetId"
    ) as j
  $$
;

grant execute on function :function_name to cmms_user;
