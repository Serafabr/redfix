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
        when 101 then message = format('%s %s - Localização do ativo deve ser um endereçamento', header, exception_code);
        when 102 then message = format('%s %s - Ativo-categoria deve estar no topo da hierarquia', header, exception_code);
        when 103 then message = format('%s %s - Categoria inválida para equipamento', header, exception_code);
        -- task api (codes 201 to 299)
        when 201 then message = format('%s %s - Tarefa deve estar vinculada a pelo menos um ativo', header, exception_code);
        when 202 then message = format('%s %s - Suprimento não pertence a uma caixa ativa', header, exception_code);
        when 203 then message = format('%s %s - Erro ao criar evento da tarefa', header, exception_code);
        when 204 then message = format('%s %s - Usuário não é o dono da mensagem', header, exception_code);
        when 205 then message = format('%s %s - Projeto inválido', header, exception_code);
        when 206 then message = format('%s %s - Tarefa não concluída não pode ser adicionada a um faturamento', header, exception_code);
        -- depot api (codes 301 to 399)
        when 301 then message = format('%s %s - Suprimento não pode ser removido pois está vinculado a alguma(s) tarefa(s)', header, exception_code);
        when 302 then message = format('%s %s - Somente podem ser ativadas as caixas de um estoque formalizado', header, exception_code);
        -- invoice api (codes 401 to 499)
        when 401 then message = format('%s %s - Alocação inválida (nenhuma caixa definida)', header, exception_code);
        -- plan api (codes 501 to 599)
        when 501 then message = format('%s %s - Rotina com periodicidade definida não permite executar create_task_from_template', header, exception_code);
        else message = header;
      end case;
    end;
  $$
;

grant execute on function :function_name to cmms_user;
