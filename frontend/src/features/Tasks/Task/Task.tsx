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
import { DataField, DataGrid } from '../../../components/DataDisplay';

import barChartIcon from '../../../assets/icons/bar-chart.svg';


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
          <DataGrid
            className={style.DataGrid}
          >
            <DataField
              gridArea="desc"
              label="Descrição"
              data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus auctor diam, non lobortis massa mattis elementum. Phasellus tincidunt felis a sem blandit, id fringilla lacus finibus. Pellentesque a dignissim velit. Pellentesque ligula est, pretium a sodales quis, interdum id nisl. Suspendisse potenti. Sed cursus tortor tincidunt porttitor suscipit. Praesent non dignissim felis. Cras at risus nec lacus laoreet cursus. Nulla nec leo dictum, iaculis tellus ac, aliquam augue. Praesent vestibulum ante at dictum lobortis. Proin nunc massa, mollis in ultricies nec, facilisis ut tellus. Donec malesuada dolor ut libero eleifend venenatis."
            />
            <DataField
              label="Local"
              data="Subsolo do Edifício Principal"
            />
            <DataField
              label="Equipe Atual"
              data="Seplag"
            />
            <DataField
              label="Categoria"
              data="Elétrica"
            />
            <DataField
              label="Prioridade"
              data="Normal"
              icon={barChartIcon}
            />
            <DataField
              label="Prazo"
              data="Quinta-feira, 31 Dez 2020 (21 dias de atraso)"
            />
            <DataField
              label="Criação da tarefa"
              data="01/03/2020"
            />
            <DataField
              label="Início da Execução"
              data="31/12/2020"
            />
            <DataField
              label="Término da Execução"
              data="31/12/2020"
            />
            <DataField
              gridArea="plan"
              label="Plano de Manutenção"
              data="PM 0012 - Limpeza semanal de subestação"
            />
          </DataGrid>
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
