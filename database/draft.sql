select format('select api.%I(%L)',:'function_name', 'haha') as my_command \gset
execute :'my_command'

-- drop function if exists testar;
-- create function testar (
--   in meu_teste_input text,
--   out resultado integer
-- )
-- language plpgsql
-- as $$
--   begin
--     select format(meu_teste_input) into resultado;
--   end;
-- $$;

-- select testar(:'meu_teste_input');