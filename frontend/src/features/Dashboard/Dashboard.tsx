import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType } from '../../components/Buttons';

import style from './Dashboard.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';

type DashProps = {
  location: {
    pathname: string
  }
};

const taskButtons = [
  <Button buttonType={ButtonType.Secondary} justIcon iconComponent={PlusIcon} />
];

export const Dashboard = ({
  location
}: DashProps) => {
  return (
    <div>
      <TitleArea 
        title="Painel"
        path={location.pathname}
        buttons={taskButtons}
      />
    </div>
  )
}
