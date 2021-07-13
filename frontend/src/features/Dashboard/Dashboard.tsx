import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button } from '../../components/Buttons';
import { ButtonType } from '../../components/Buttons/_types';

import style from './Dashboard.module.scss';

import { MoreHorizontal as MoreIcon } from '../../components/Icons';
import { FilterWithDropdown } from '../../components/Filters';
import { AddSelectBox } from '../../components/SelectBox';
import { AlignListType } from '../../components/SelectBox/_types';
import { Modal } from '../../components/Modals';
import { Card } from '../../components/Cards';
import { Quick } from '../../components/Icons';
import { useState } from 'react';

type DashProps = {
  location: {
    pathname: string
  }
};

const dashButtons = [
  <AddSelectBox 
    options={{
      '1': { name: 'Teste1' },
      '2': { name: 'Teste2' }
    }
  }
    alignList={AlignListType.Right}
    onSelectItem={(id) => {console.log(id)}}
  >
    {(onClick, isOpen) => {
      return (
        <Button className={isOpen && style.OpenMoreButton} buttonType={ButtonType.Secondary} onClick={onClick} iconComponent={MoreIcon} />
      );
    }}
  </AddSelectBox>
];

const options = {
  a: {name: "teste"},
  b: {name: "teste1"},
  c: {name: "teste2"},
}

export const Dashboard = ({
  location
}: DashProps) => {
  
  const [ modal, setModal ] = useState(false);
  
  return (
    <div>
      <Modal 
        isOpen={modal}
        setisOpen={setModal}
        title="Modal de teste"
      />
      <TitleArea 
        title="Painel"
        path={location.pathname}
        buttons={dashButtons}
      />
      <Card>
        <div style={{ padding: "20px" }}>
        </div>
        <Button 
          text="Modal"
          onClick={() => {setModal(true)}}
        />
      </Card>
    </div>
  )
}
