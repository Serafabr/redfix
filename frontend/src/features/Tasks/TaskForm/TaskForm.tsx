import style from './TaskForm.module.scss';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { useLocation, useParams } from 'react-router';

import { Card, CardHeader } from '../../../components/Cards';
import { CardTitle } from '../../../components/Cards/CardTitle/CardTitle';
import { SingleCardHeader } from '../../../components/Cards';
import { SingleCardContent } from '../../../components/Cards';

import { Badge } from '../../../components/Badges';
import { ColorType } from '../../../components/Badges/_types';

export const TaskForm = () => {
  
  const location = useLocation<string>();
  
  return (
    <div>
      <TitleArea 
        title={`Cadastrar tarefa`}
        path={location.pathname}
        buttons={[]}
      />
      <Card>
        <CardHeader>
          <SingleCardHeader>
            <CardTitle
              title="Informações gerais"
              subtitle="Informações que serão necessárias para a execução da tarefa."
            />
            <div style={{ width: "120px" }}>
              {/* <Badge text="Formulário incompleto" color={ColorType.Orange} /> */}
              <Badge text="Etapa 01 de 05" color={ColorType.Red} />
            </div>
          </SingleCardHeader>
        </CardHeader>
        <SingleCardContent>
          Hello
        </SingleCardContent>
        <CardHeader>
          <SingleCardHeader>
            <CardTitle
              title="Datas e prazos"
              subtitle="Prazo de ínicio e para o término da tarefa. Tais informações podem ser preenchidas posteriormente."
            />
            <div style={{ width: "120px" }}>
              {/* <Badge text="Preenchido sem erros" color={ColorType.Green} /> */}
              <Badge text="Etapa 02 de 05" color={ColorType.Green} />
            </div>
          </SingleCardHeader>
        </CardHeader>
        <SingleCardContent>
          Hello
        </SingleCardContent>
        <CardHeader>
          <SingleCardHeader>
            <CardTitle
              title="Vincular ativos"
              subtitle="Os ativos cadastrados serão os 'alvos' dos seviços a serem realizados. Não é possível o cadastro de uma tarefa SEM ativo."
            />
            <div style={{ width: "120px" }}>
              {/* <Badge text="Preenchido com erros" color={ColorType.Red} /> */}
              <Badge text="Etapa 03 de 05" color={ColorType.Orange} />
            </div>
          </SingleCardHeader>
        </CardHeader>
        <SingleCardContent>
          Hello
        </SingleCardContent>
      </Card>
    </div>
  )
}
