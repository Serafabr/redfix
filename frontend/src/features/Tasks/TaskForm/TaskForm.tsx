import style from './TaskForm.module.scss';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { useLocation, useParams } from 'react-router';

import { Card } from '../../../components/Cards';
import { CardTitle } from '../../../components/Cards/CardTitle';
import { CardHeader } from '../../../components/Cards/CardHeader';
import { SingleCardHeader } from '../../../components/Cards/SingleCard';
import { SingleCardContent } from '../../../components/Cards/SingleCard';

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
          </SingleCardHeader>
        </CardHeader>
        <SingleCardContent>
          Hello
        </SingleCardContent>
      </Card>
    </div>
  )
}
