import { PageTitle } from '../../../components/PageTitle/PageTitle';
import { Button, ButtonType } from '../../../components/Buttons';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { ButtonWithDropdown, AlignListType } from '../../../components/Buttons';

import { Plus as PlusIcon } from '../../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../../components/Icons';

import style from './Task.module.scss';
import { useLocation, useParams } from 'react-router';
import { Card } from '../../../components/Cards';

type URLParams = {
  id: string
}

const taskButtons = [
  <Button text="Editar tarefa" iconComponent={PlusIcon} />,
  <ButtonWithDropdown 
    options={{
      customize: { name: 'Customizar tabela' },
      exportCSV: { name: 'Exportar para CSV' },
      exportExcel: { name: 'Exportar para Excel' },
      exportPDF: { name: 'Exportar para PDF' },
    }}
    alignList={AlignListType.Right}
    boxWidth={160}
    onSelectItem={(id) => {console.log(id)}}
  >
    {(onClick, isOpen) => {
      return (
        <Button buttonType={ButtonType.Secondary} onClick={onClick} justIcon iconComponent={MoreIcon} />
      );
    }}
  </ButtonWithDropdown>
];

export const Task = () => {
  
  const { id: taskID } = useParams<URLParams>();
  const location = useLocation<string>();
  
  return (
    <div>
      <TitleArea 
        title={`Tarefa - ${taskID}`}
        path={location.pathname}
        buttons={taskButtons}
      />
      <Card>
        <div className={style.SingleCardHeader}>
          Title
        </div>
        <div>Content</div>
        <div>Tabs</div>
      </Card>
    </div>
  )
}
