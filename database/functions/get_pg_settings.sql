\set function_name api.get_pg_settings

drop function if exists :function_name;
create or replace function :function_name (
  out my_settings text
)
  language plpgsql
  stable
  as $$
    begin
      select
        current_setting('transaction_read_only')::text || '-' ||
        current_setting('application_name')::text || '-' ||
        current_setting('statement_timeout')::text
      into my_settings;
    end;
  $$
;

grant execute on function :function_name to public;
