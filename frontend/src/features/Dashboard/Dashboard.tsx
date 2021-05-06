import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType } from '../../components/Buttons';

import style from './Dashboard.module.scss';

import { MoreHorizontal as MoreIcon } from '../../components/Icons';
import { Plus as PlusIcon } from '../../components/Icons';

type DashProps = {
  location: {
    pathname: string
  }
};

const dashButtons = [
  <Button buttonType={ButtonType.Secondary} justIcon iconComponent={MoreIcon} />
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
    </div>
  )
}
