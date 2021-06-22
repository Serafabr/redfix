import style from './TaskForm.module.scss';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { useLocation, useParams } from 'react-router';

import { Card, CardHeader } from '../../../components/Cards';
import { CardTitle } from '../../../components/Cards/CardTitle/CardTitle';
import { SingleCardHeader } from '../../../components/Cards';
import { SingleCardContent } from '../../../components/Cards';
import { FormHeader, FormContent, FormContainer } from '../../../components/Forms';
import { SituationType } from '../../../components/Forms/_types';

import { Badge } from '../../../components/Badges';
import { ColorType } from '../../../components/Badges/_types';

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
          situation={SituationType.Incomplete}
        />
        <FormContent>
          Hello
        </FormContent>
        <FormHeader
          title="Datas e prazos"
          subtitle="Prazo de ínicio e para o término da tarefa. Tais informações podem ser preenchidas posteriormente. Prazo de ínicio e para o término da tarefa. Tais informações podem ser preenchidas posteriormente."
          badgeText="Etapa 02 de 05"
          situation={SituationType.Ok}
        />
        <FormContent>
          Hello
        </FormContent>
      </FormContainer>
    </>
  )
}
