drop view if exists not_indexed_fks;
create or replace view not_indexed_fks as
  -- https://www.graphile.org/postgraphile/postgresql-indexes/
  with indexed_tables as (
    select
      ns.nspname,
      t.relname as table_name,
      i.relname as index_name,
      array_to_string(array_agg(a.attname), ', ') as column_names,
      ix.indrelid,
      string_to_array(ix.indkey::text, ' ')::smallint[] as indkey
    from pg_class i
    join pg_index ix on i.oid = ix.indrelid
    join pg_class t on ix.indrelid = t.oid
    join pg_namespace ns on ns.oid = t.relnamespace
    join pg_attribute a on a.attrelid = t.oid
    where a.attnum = any(ix.indkey)
    and t.relkind = 'r'
    and nspname not in ('pg_catalog')
    group by
        ns.nspname,
        t.relname,
        i.relname,
        ix.indrelid,
        ix.indkey
    order by
        ns.nspname,
        t.relname,
        i.relname,
        ix.indrelid,
        ix.indkey
  )
  select
    conrelid::regclass
    ,conname
    ,reltuples::bigint
  from pg_constraint pgc
  join pg_class on (conrelid = pg_class.oid)
  where contype = 'f'
  and not exists(
    select 1
    from indexed_tables
    where indrelid = conrelid
    and conkey = indkey
    or (array_length(indkey, 1) > 1 and indkey @> conkey)
  )
  order by reltuples desc
;
