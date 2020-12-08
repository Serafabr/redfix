drop function if exists get_constant_value;

create or replace function get_constant_value(
  in constant_name text,
  out constant_value text
)
  language sql
  as $$
    select
      case constant_name
        -- task status constants:
        when 'task_initial_status'     then '1'
        when 'task_canceled_status'    then '6'
        when 'task_finished_status'    then '7'
        when 'task_status_threshold'   then '6'
        -- asset categories:
        when 'asset_category_facility' then '1'
        when 'asset_category_electric' then '5001'
        when 'asset_category_air'      then '5022'
        when 'asset_category_hydro'    then '5032'
      end
    as constant_value;
  $$
;
