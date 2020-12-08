\set function_name web.get_api_docs

drop function if exists :function_name;
create or replace function :function_name (
  out docs jsonb
)
  language plpgsql
  stable
  security definer
  as $$
    begin
      with
        my_schemas_oids as (
          select  oid,
                  nspname
          from pg_namespace
          where
            nspname = 'api' or
            nspname = 'web'
        ),
        api_functions as (
          select  p.oid,
                  p.pronamespace,
                  p.proname,
                  m.nspname
          from pg_proc as p
          inner join my_schemas_oids as m on (m.oid = p.pronamespace)
        )
      select  jsonb_agg(jsonb_build_object(
                'schema', a.nspname,
                'name', left(a.proname, 1) || right(replace(initcap(a.proname), '_', ''), -1),
                'docs', coalesce(d.description, 'Sem documentação.')
              ) order by a.pronamespace, a.proname) into docs
      from api_functions as a
      left join pg_description as d on (a.oid = d.objoid);
    end;
  $$
;
