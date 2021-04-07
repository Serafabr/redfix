\set function_name raise_exception

drop function if exists :function_name;
create or replace function :function_name (
  in errcode_input integer
)
  returns void
  language plpgsql
  strict
  as $$
    declare
      m text;
      d text;
      h text;
    begin
      select
        e.message,
        e.detail,
        e.hint
        into
        m,
        d,
        h
      from exceptions as e
      where e.errcode = errcode_input;

      raise exception using
        errcode = 'RF' || errcode_input::text,
        message = m,
        detail = d,
        hint = h
      ;
    end;
  $$
;

grant execute on function :function_name to cmms_user;
