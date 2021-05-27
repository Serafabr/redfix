import { PageTitle } from '../../../components/PageTitle/PageTitle';
import { Button, ButtonType } from '../../../components/Buttons';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { ButtonWithDropdown, AlignListType } from '../../../components/Buttons';

import { Plus as PlusIcon } from '../../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../../components/Icons';

import style from './Task.module.scss';
import { useLocation, useParams } from 'react-router';
import { Card } from '../../../components/Cards';
import { CardHeader } from '../../../components/Cards/CardHeader';

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
        <CardHeader>
          <div className={style.SingleCardHeader}>
            <div className={style.CardTitleWrapper}>
              <div className={style.CardTitle}>
                Manutenção no subsolo do Edifício Principal. Trocar todos os disjuntores e fazer revisão dos quadros elétricos.
                <span className={style.CardBookmark}>BM</span>
              </div>
              <div className={style.CardTags}>
                <div className={style.BadgeWrapper}>
                  <div className={`${style.StatusBadge} ${style.Blue}`}>Fila de espera</div>
                </div>
                <div className={style.BadgeWrapper}>
                  <div className={`${style.StatusBadge} ${style.Red}`}>Atrasado</div>
                </div>
              </div>
            </div>
            <div className={style.Percentage}>Percentage</div>
          </div>
        </CardHeader>
        <div>Content</div>
        <div>Tabs</div>
      </Card>
    </div>
  )
}
