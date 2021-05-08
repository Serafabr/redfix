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
        current_setting('application_name')::text || ',' ||
        session_user::text || ',' ||
        current_user::text || ',' ||
        current_setting('transaction_read_only')::text || ',' ||
        current_setting('statement_timeout')::text || ',' ||
        current_setting('transaction_isolation')::text
      into my_settings;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee, visitor;
