drop function if exists get_exception_message;

create or replace function get_exception_message (
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
        when 1 then message = format('%s %s - Tarefa sem ativos.', header, exception_code);
        when 2 then message = format('%s %s - Saldo insuficiente do suprimento.', header, exception_code);
        when 3 then message = format('%s %s - Quantidade com decimais não permitida para o suprimento.', header, exception_code);
        when 4 then message = format('%s %s - Suprimento não é de um estoque ativado.', header, exception_code);
        when 5 then message = format('%s %s - Categoria de ativo inválida.', header, exception_code);
        when 6 then message = format('%s %s - Árvore de relações de ativos inválida.', header, exception_code);
        when 7 then message = format('%s %s - Ativo deve possuir um pai.', header, exception_code);
        when 8 then message = format('%s %s - Erro no evento da tarefa.', header, exception_code);
        when 9 then message = format('%s %s - Não é o dono da mensagem.', header, exception_code);
        else message = header;
      end case;
    end;
  $$
;
