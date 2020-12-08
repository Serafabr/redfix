\set function_name get_exception_message

drop function if exists :function_name;
create or replace function :function_name (
  in exception_code integer,
  out message text
)
  language plpgsql
  as $$
    declare
      header text;
    begin
      header = 'CMMS: ERRO';
      case exception_code
        -- asset api (codes 101 to 199)
        when 101 then message = format('%s %s - Localização do ativo deve ser um endereçamento.', header, exception_code);
        when 102 then message = format('%s %s - Ativo-categoria deve estar no topo da hierarquia.', header, exception_code);
        -- task api (codes 201 to 299)
        when 201 then message = format('%s %s - Tarefa deve estar vinculada a pelo menos um ativo.', header, exception_code);
        when 202 then message = format('%s %s - Suprimento não pertence a uma caixa ativa.', header, exception_code);
        when 203 then message = format('%s %s - Erro ao criar evento da tarefa.', header, exception_code);
        when 204 then message = format('%s %s - Usuário não é o dono da mensagem.', header, exception_code);
        -- depot api (codes 301 to 399)
        when 301 then message = format('%s %s - Suprimento não pode ser removido pois está vinculado a alguma(s) tarefa(s).', header, exception_code);
        when 302 then message = format('%s %s - Somente podem ser ativadas as caixas de um estoque formalizado.', header, exception_code);
        -- team api (codes 401 to 499)
        else message = header;
      end case;
    end;
  $$
;

grant execute on function :function_name to cmms_user;
