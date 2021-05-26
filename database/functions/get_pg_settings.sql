\set function_name api.get_pg_settings

drop function if exists :function_name;
create or replace function :function_name (
  out my_settings jsonb
)
  language plpgsql
  stable
  as $$
    begin
      select jsonb_build_object(
        'applicationName', current_setting('application_name')::text,
        'clientEncoding', pg_client_encoding()::text,
        'sessionUser', session_user::text,
        'currentRole', current_role::text,
        'personId', coalesce(current_setting('cookie.session.person_id',true),'_'),
        'transactionReadOnly', current_setting('transaction_read_only')::text = 'on',
        'transactionIsolation', current_setting('transaction_isolation')::text,
        'statementTimeout', current_setting('statement_timeout')::numeric
      ) into my_settings;
    end;
  $$
;

grant execute on function :function_name to supervisor, inspector, employee, visitor;
