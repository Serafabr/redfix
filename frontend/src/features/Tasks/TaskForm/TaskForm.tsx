import style from './TaskForm.module.scss';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { useLocation, useParams } from 'react-router';

import { Card } from '../../../components/Cards';
import { CardTitle } from '../../../components/Cards/CardTitle';
import { CardHeader } from '../../../components/Cards/CardHeader';
import { SingleCardHeader } from '../../../components/Cards/SingleCard';
import { SingleCardContent } from '../../../components/Cards/SingleCard';

import { Badge } from '../../../components/Badges';
import { ColorType } from '../../../components/Badges/Badge';

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
              badges={[]}
            />
            <div>
              <Badge text="Formulário incompleto" color={ColorType.Orange} />
              <Badge text="Etapa 02 de 05" color={ColorType.Blue} />
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
              badges={[]}
            />
            <div>
              <Badge text="Preenchido sem erros" color={ColorType.Green} />
              <Badge text="Etapa 02 de 05" color={ColorType.Blue} />
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
              badges={[]}
            />
            <div>
              <Badge text="Preenchido com erros" color={ColorType.Red} />
              <Badge text="Etapa 02 de 05" color={ColorType.Blue} />
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
