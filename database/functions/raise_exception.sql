\set function_name raise_exception

drop function if exists :function_name;
create or replace function :function_name (
  in errcode_input integer default null
)
  returns void
  language plpgsql
  as $$
    declare
      m text;
      d text;
      h text;
    begin
      if errcode_input is null
        then raise exception 'Undefined errcode_input';
      end if;
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
      if not found
        then raise exception '%', format('errcode %s does not exist in exceptions table', errcode_input);
      end if;
      raise exception using
        errcode = 'SF' || errcode_input::text,
        message = m,
        detail = d,
        hint = h
      ;
    end;
  $$
;
