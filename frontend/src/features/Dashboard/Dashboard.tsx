import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button } from '../../components/Buttons';
import { ButtonType } from '../../components/Buttons/Button/_types';

import style from './Dashboard.module.scss';

import { MoreHorizontal as MoreIcon } from '../../components/Icons';
import { Dropdown } from '../../components/Inputs';
import { FilterWithDropdown } from '../../components/Filters';
import { AddSelectBox } from '../../components/Buttons';
import { AlignListType } from '../../components/Buttons/AddSelectBox/_types';
import { Modal } from '../../components/Modals';
import { Card } from '../../components/Cards';
import { Quick } from '../../components/Icons';

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
  return (
    <div>
      <TitleArea 
        title="Painel"
        path={location.pathname}
        buttons={dashButtons}
      />
      <Card>
        <div style={{ padding: "20px" }}>
          <FilterWithDropdown 
            fixedName="Nome1"
            manyOptionsName="Muitos"
            options={options}
            onSelectItem={()=>{}}
            icon={Quick}
          />
        </div>
      </Card>
    </div>
  )
}
