\set function_name web.refresh_all_materialized_views

drop function if exists :function_name;
create or replace function :function_name (
  out refreshed_at timestamptz
)
  language plpgsql
  security definer
  as $$
    declare
      mviews record;
    begin
      for mviews in
        select n.nspname as mv_schema,
              c.relname as mv_name
          from pg_catalog.pg_class as c
          left join pg_catalog.pg_namespace as n on (n.oid = c.relnamespace)
        where c.relkind = 'm'
      loop
        execute format('refresh materialized view %I.%I', mviews.mv_schema, mviews.mv_name);
      end loop;

      refreshed_at = now();

    end;
  $$
;

grant execute on function :function_name to cmms_user;
