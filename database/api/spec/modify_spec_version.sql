drop function if exists api.modify_spec_version;

create or replace function api.modify_spec_version (
  in attributes specs,
  out id integer
)
  language plpgsql
  as $$
    begin
      update specs as z set (
        -- TODO
      ) = (
        -- TODO
      ) where z.spec_id = attributes.spec_id
      returning z.spec_id into id;
    end;
  $$
;
