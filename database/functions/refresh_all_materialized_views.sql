drop function if exists web.refresh_all_materialized_views;

create or replace function web.refresh_all_materialized_views (
  out refreshed_at timestamptz
)
  language plpgsql
  -- security definer: this is necessary because
  -- only the owner of a materialized view can refresh it
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
