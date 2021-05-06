import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType } from '../../components/Buttons';

import style from './Monitors.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../components/Icons';

type MonitorsProps = {
  location: {
    pathname: string
  }
};

const monitorsButtons = [
  <Button text="Novo monitor" iconComponent={PlusIcon} />,
  <Button buttonType={ButtonType.Secondary} justIcon iconComponent={MoreIcon} />
];

export const Monitors = ({
  location
}: MonitorsProps) => {
  return (
    <div>
      <TitleArea 
        title="Monitores"
        path={location.pathname}
        buttons={monitorsButtons}
      />
    </div>
  )
}
