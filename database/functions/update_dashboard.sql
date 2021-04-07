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
        coalesce((
          select count(*)
          from active_boxes as ab
          inner join boxes as b using (box_id)
          inner join depots as d using (depot_id)
          group by depot_id
        ),0)
      );
      updated_at = now();
    end;
  $$
;
