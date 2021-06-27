import style from './TaskForm.module.scss';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { useLocation, useParams } from 'react-router';

import { Card, CardHeader } from '../../../components/Cards';
import { CardTitle } from '../../../components/Cards/CardTitle/CardTitle';
import { SingleCardHeader } from '../../../components/Cards';
import { SingleCardContent } from '../../../components/Cards';
import { FormHeader, FormContent, FormContainer } from '../../../components/Forms';
import { FormSituationType } from '../../../components/Forms/_types';
import { AddSelectBox } from '../../../components/Buttons';

import { Badge } from '../../../components/Badges';
import { ColorType } from '../../../components/Badges/_types';
import { Input, InputField } from '../../../components/Inputs';
import { Dropdown } from '../../../components/Inputs'; 
import { QuickSearch } from '../../../components/Inputs/QuickSearch/QuickSearch';

export const TaskForm = () => {
  
  const location = useLocation<string>();
  
  return (
    <>
      <TitleArea 
        title={`Cadastrar tarefa`}
        path={location.pathname}
        buttons={[]}
      />
      <FormContainer>
        <FormHeader
          title="Informações gerais"
          subtitle="Aqui estão as informações essenciais para a execução da tarefa. No campo 'Tarefa' descreva brevemente o serviço que será realizado, enquanto que no campo 'Descrição' faça um detalhamento de tudo o que será necessário."
          badgeText="Etapa 01 de 05"
          situation={FormSituationType.Incomplete}
        />
        <FormContent>
          <InputField
            label="Tarefa"
            error={false}
            errorMessage={"Valor incorreto!"}
          >
            <Input placeholder="Teste" error={false} />
          </InputField>
          <div style={{ width: "40%", marginTop: "30px" }}>
            <InputField
              label="Status"
              error={false}
              errorMessage={"Valor incorreto!"}
            >
              <AddSelectBox
                options={{a: {name: "AAAA"}}}
                onSelectItem={()=>{}}
              >
                {(onClick, isOpen) => (
                  <Dropdown 
                    value={"Teste"}
                    isOpen={isOpen}
                    handleOnClick={onClick}
                    error={false}
                  />
                )}
              </AddSelectBox>
            </InputField>
          </div>
          <div style={{ width: "50%", marginTop: "30px" }}>
            <QuickSearch />
          </div>
        </FormContent>
        <FormHeader
          title="Datas e prazos"
          subtitle="Prazo de ínicio e para o término da tarefa. Tais informações podem ser preenchidas posteriormente. Prazo de ínicio e para o término da tarefa. Tais informações podem ser preenchidas posteriormente."
          badgeText="Etapa 02 de 05"
          situation={FormSituationType.Ok}
        />
        <FormContent>
          Hello
        </FormContent>
      </FormContainer>
    </>
  )
}
