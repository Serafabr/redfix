drop function if exists api.insert_spec_version;

create or replace function api.insert_spec_version (
  in attributes specs,
  out id integer
)
  language plpgsql
  as $$
    begin
      insert into specs values (
        default,
        attributes.spec_sf,
        attributes.version,
        -- TODO
      ) returning spec_id into id;
    end;
  $$
;
