drop function if exists refresh_active_boxes;

create or replace function refresh_active_boxes()
  returns void
  language plpgsql
  -- security definer: this is necessary because
  -- only the owner of a materialized view can refresh it
  security definer
  as $$
    begin
      refresh materialized view active_boxes;
    end;
  $$
;
