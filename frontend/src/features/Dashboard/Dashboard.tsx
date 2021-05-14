import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType, FilterDropdown } from '../../components/Buttons';

import style from './Dashboard.module.scss';

import { MoreHorizontal as MoreIcon } from '../../components/Icons';
import { Dropdown } from '../../components/Buttons/Dropdown/Dropdown';
import { ButtonWithDropdown, AlignList } from '../../components/Buttons';

type DashProps = {
  location: {
    pathname: string
  }
};

const dashButtons = [
  <ButtonWithDropdown 
    listItems={[
      {id: '1', name: 'Teste1'},
      {id: '2', name: 'Teste2'},
    ]}
    alignList={AlignList.Right}
  >
    {(onClick, isOpen) => {
      return (
        <Button className={isOpen && style.OpenMoreButton} buttonType={ButtonType.Secondary} onClick={onClick} justIcon iconComponent={MoreIcon} />
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
