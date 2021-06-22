import { useState } from 'react';

import { Button, PlainButton } from '../../../components/Buttons';
import { TitleArea } from '../../../components/TitleArea/TitleArea';
import { ButtonWithDropdown } from '../../../components/Buttons';
import { AlignListType } from '../../../components/Buttons/ButtonWithDropdown/_types';
import { ButtonType } from '../../../components/Buttons/Button/_types';

import { Plus as PlusIcon } from '../../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../../components/Icons';

import style from './Task.module.scss';
import { useLocation, useParams } from 'react-router';
import { Card } from '../../../components/Cards';
import { CardHeader } from '../../../components/Cards/CardHeader';
import { Tabs } from '../../../components/Tabs';
import { DataField, DataFieldPriority, DataGrid } from '../../../components/DataDisplay';

import { PercentageBar } from '../../../components/PercentageBar';
import { Badge } from '../../../components/Badges';
import { ColorType } from '../../../components/Badges/_types';
import { CardTitle } from '../../../components/Cards/CardTitle/CardTitle';
import { SingleCardContent, SingleCardHeader } from '../../../components/Cards/SingleCard';
import { PrioritiesT } from '../../../components/DataDisplay/DataFieldPriority';
import { BadgeDelay } from '../components/BadgeDelay';
import { DelayT } from '../components/BadgeDelay/BadgeDelay';

import { tabConfig } from './tabs/tabConfig';


const tabs = [
  'logs',
  'supplies',
  'assets',
  // 'checklist',
  'billings',
  'monitors',
  'files',
];

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
        <Button buttonType={ButtonType.Secondary} onClick={onClick} iconComponent={MoreIcon} />
      );
    }}
  </ButtonWithDropdown>
];

export const Task = () => {
  
  const [ activateKeyTabs, setActivateKeyTabs ] = useState(tabs[0]);
  const [ bookmarkState, setBookmarkState ] = useState(false);
  
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
          <SingleCardHeader>
            <CardTitle 
              title="Manutenção no subsolo do Edifício Principal. Trocar todos os disjuntores e fazer revisão dos quadros elétricos."
              withBookmark={true}
              bookmarkState={bookmarkState}
              setBookmarkState={setBookmarkState}
              badges={[
                <Badge text="Fila de espera" color={ColorType.Orange} />,
                <BadgeDelay delay={DelayT.OnTime} />,
                <Badge text="Tarefa urgente" color={ColorType.Pink} />
              ]}
            />
            <PercentageBar progress={15}/>
          </SingleCardHeader>
        </CardHeader>
        <SingleCardContent>
          <DataGrid className={style.DataGrid}>
            <DataField gridArea="desc" label="Descrição">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus auctor diam, non lobortis massa mattis elementum. Phasellus tincidunt felis a sem blandit, id fringilla lacus finibus. Pellentesque a dignissim velit. Pellentesque ligula est, pretium a sodales quis, interdum id nisl. Suspendisse potenti. Sed cursus tortor tincidunt porttitor suscipit. Praesent non dignissim felis. Cras at risus nec lacus laoreet cursus. Nulla nec leo dictum, iaculis tellus ac, aliquam augue. Praesent vestibulum ante at dictum lobortis. Proin nunc massa, mollis in ultricies nec, facilisis ut tellus. Donec malesuada dolor ut libero eleifend venenatis.
            </DataField>
            <DataField label="Local">
              Subsolo do Edifício Principal.
            </DataField>
            <DataField label="Equipe Atual">
              Seplag
            </DataField>
            <DataField label="Categoria">
              Elétrica
            </DataField>
            <DataFieldPriority 
              priority={PrioritiesT.Low}
            />
            <DataField label="Prazo">
              Quinta-feira, 31 Dez 2020 (21 dias de atraso)
            </DataField>
            <DataField label="Criação da tarefa">
              01/03/2020
            </DataField>
            <DataField label="Início da Execução">
              31/12/2020
            </DataField>
            <DataField label="Término da Execução">
              31/12/2020
            </DataField>
            <DataField gridArea="plan" label="Plano de Manutenção" withLink>
              PM 0012 - Limpeza semanal de subestação
            </DataField>
          </DataGrid>
        </SingleCardContent>
        <Tabs
          tabs={tabs}
          tabViews={tabConfig}
          tabsPerSize={tabsPerSize}
          activateKey={activateKeyTabs}
          setActivateKey={setActivateKeyTabs}
        />
      </Card>
    </div>
  )
}
