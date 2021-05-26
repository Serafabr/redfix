\set function_name coalesce_list

drop function if exists :function_name;
create or replace function :function_name (
  in json_input jsonb,
  out json_output jsonb
)
  language sql
  stable
  as $$
    -- returns empty json array if input is null
    select coalesce(json_input, '[]'::jsonb) as json_output;
  $$
;
