import { useState } from 'react';

import { PageTitle } from '../../../components/PageTitle/PageTitle';
import { Button, ButtonType } from '../../../components/Buttons';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { ButtonWithDropdown, AlignListType } from '../../../components/Buttons';

import { Plus as PlusIcon } from '../../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../../components/Icons';
import BookmarkIcon from '../../../assets/icons/bookmark.svg';

import style from './Task.module.scss';
import { useLocation, useParams } from 'react-router';
import { Card } from '../../../components/Cards';
import { CardHeader } from '../../../components/Cards/CardHeader';
import { ProgressBar } from '../../../components/ProgressBar';
import { Tabs } from '../../../components/Tabs';


const tabs = [
  'history',
  'supplies',
  'assets',
  'checklist',
  'files',
  'billings',
  'monitors'
];

const tabViews: any = {
  history: { name: "Histórico", view: <div>Histórico</div> },
  supplies: { name: "Suprimentos", view: <div>Suprimentos</div> },
  assets: { name: "Ativos", view: <div>Ativos</div> },
  checklist: { name: "Checklist", view: <div>Checklist</div> },
  files: { name: "Arquivos", view: <div>Arquivos</div> },
  billings: { name: "Faturamentos", view: <div>Faturamentos</div> },
  monitors: { name: "Monitores", view: <div>Monitores</div> },
}

const tabsPerSize: {[key: number]: number} = {1160: 6};


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
  
  const [ activateKeyTabs, setActivateKeyTabs ] = useState(tabs[0]);
  
  const { id: taskID } = useParams<URLParams>();
  const location = useLocation<string>();
  
  return (
    <div>
      <TitleArea 
        title={`Tarefa ${taskID}`}
        path={location.pathname}
        buttons={taskButtons}
      />
      <Card>
        <CardHeader>
          <div className={style.SingleCardHeader}>
            <div className={style.CardTitleWrapper}>
              <div className={style.CardTitle}>
                Manutenção no subsolo do Edifício Principal. Trocar todos os disjuntores e fazer revisão dos quadros elétricos.
                <span className={style.CardBookmark}>
                  <img src={BookmarkIcon} alt="Favoritar tarefa" />
                </span>
              </div>
              <div className={style.CardHeaderTags}>
                <div className={style.BadgeWrapper}>
                  <div className={`${style.StatusBadge} ${style.Blue}`}>Fila de espera</div>
                </div>
                <div className={style.BadgeWrapper}>
                  <div className={`${style.StatusBadge} ${style.Red}`}>Atrasado</div>
                </div>
              </div>
            </div>
            <div className={style.Percentage}>
              <ProgressBar />
              <div className={style.PercentageText}>80%</div>
            </div>
          </div>
        </CardHeader>
        <div className={style.CardContent}>
          <div className={`${style.DataDisplay} ${style.DescriptionGrid}`}>
            <div className={style.Label}>Descrição</div>
            <div className={style.Data}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus auctor diam, non lobortis massa mattis elementum. Phasellus tincidunt felis a sem blandit, id fringilla lacus finibus. Pellentesque a dignissim velit. Pellentesque ligula est, pretium a sodales quis, interdum id nisl. Suspendisse potenti. Sed cursus tortor tincidunt porttitor suscipit. Praesent non dignissim felis. Cras at risus nec lacus laoreet cursus. Nulla nec leo dictum, iaculis tellus ac, aliquam augue. Praesent vestibulum ante at dictum lobortis. Proin nunc massa, mollis in ultricies nec, facilisis ut tellus. Donec malesuada dolor ut libero eleifend venenatis.</div>
          </div>
          <div className={`${style.DataDisplay}`}>
            <div className={style.Label}>Local</div>
            <div className={style.Data}>Subsolo do Edifício Principal</div>
          </div>
          <div className={`${style.DataDisplay}`}>
            <div className={style.Label}>Equipe Atual</div>
            <div className={style.Data}>Seplag</div>
          </div>
          <div className={`${style.DataDisplay}`}>
            <div className={style.Label}>Plano de Manutenção</div>
            <div className={style.Data}>PM 0012 - Limpeza semanal de subestação</div>
          </div>
          <div className={`${style.DataDisplay}`}>
            <div className={style.Label}>Prioridade</div>
            <div className={style.Data}>Normal</div>
          </div>
          <div className={`${style.DataDisplay}`}>
            <div className={style.Label}>Prazo</div>
            <div className={style.Data}>Quinta-feira, 31 Dez 2020 (21 dias de atraso)</div>
          </div>
          <div className={`${style.DataDisplay}`}>
            <div className={style.Label}>Criação da tarefa</div>
            <div className={style.Data}>01/03/2020</div>
          </div>
          <div className={`${style.DataDisplay}`}>
            <div className={style.Label}>Início da Execução</div>
            <div className={style.Data}>31/12/2020</div>
          </div>
          <div className={`${style.DataDisplay}`}>
            <div className={style.Label}>Término da Execução</div>
            <div className={style.Data}>31/12/2020</div>
          </div>
        </div>
        <Tabs
          tabs={tabs}
          tabViews={tabViews}
          tabsPerSize={tabsPerSize}
          activateKey={activateKeyTabs}
          setActivateKey={setActivateKeyTabs}
        />
      </Card>
    </div>
  )
}
