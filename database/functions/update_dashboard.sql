\set function_name web.update_dashboard

drop function if exists :function_name;
create or replace function :function_name (
  out updated_at timestamptz
)
  language plpgsql
  as $$
    begin
      insert into dashboard values (
        now(),
        (select count(*) from tasks),
        (select count(*) from tasks where date_limit < current_date),
        (select count(*) from tasks where task_status_id = 7),
        (select count(*) from tasks where task_status_id = 6),
        (select count(*) from assets),
        (select count(*) from assets where asset_category_id = 1),
        (select count(*) from assets where asset_category_id <> 1),
        (select count(*) from persons),
        (select count(*) from persons where is_active),
        (select count(*) from depots),
        (select count(*) from depots where is_active)
      );
      updated_at = now();
    end;
  $$
;
