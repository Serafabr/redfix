import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button } from '../../components/Buttons';
import { ButtonType } from '../../components/Buttons/Button/_types';

import style from './Dashboard.module.scss';

import { MoreHorizontal as MoreIcon } from '../../components/Icons';
import { Dropdown } from '../../components/Buttons/Dropdown/Dropdown';
import { ButtonWithDropdown } from '../../components/Buttons';
import { AlignListType } from '../../components/Buttons/ButtonWithDropdown/_types';
import { Modal } from '../../components/Modals';

type DashProps = {
  location: {
    pathname: string
  }
};

const dashButtons = [
  <ButtonWithDropdown 
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
  </ButtonWithDropdown>
];

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
      <Dropdown />
    </div>
  )
}
