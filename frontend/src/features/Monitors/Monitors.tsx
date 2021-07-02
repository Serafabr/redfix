import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button } from '../../components/Buttons';

import { ButtonType } from '../../components/Buttons/_types';

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
  <Button buttonType={ButtonType.Secondary} iconComponent={MoreIcon} />
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
