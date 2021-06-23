import style from './TaskForm.module.scss';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { useLocation, useParams } from 'react-router';

import { Card, CardHeader } from '../../../components/Cards';
import { CardTitle } from '../../../components/Cards/CardTitle/CardTitle';
import { SingleCardHeader } from '../../../components/Cards';
import { SingleCardContent } from '../../../components/Cards';
import { FormHeader, FormContent, FormContainer } from '../../../components/Forms';
import { FormSituationType } from '../../../components/Forms/_types';

import { Badge } from '../../../components/Badges';
import { ColorType } from '../../../components/Badges/_types';
import { Input, InputField } from '../../../components/Inputs';
import { Dropdown } from '../../../components/Inputs'; 

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
          subtitle="Informações que serão necessárias para a execução da tarefa."
          badgeText="Etapa 01 de 05"
          situation={FormSituationType.Incomplete}
        />
        <FormContent>
          <InputField
            label="Título da tarefa"
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
              <Dropdown 
                value={"Teste"}
                isOpen={false}
                handleOnClick={()=>{}}
                buttonStyle={{ width: "100%" }}
              />
            </InputField>
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
