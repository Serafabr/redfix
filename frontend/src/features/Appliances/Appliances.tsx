import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button } from '../../components/Buttons';
import { ButtonType } from '../../components/Buttons/_types';

import style from './Appliances.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../components/Icons';

type AppliancesProps = {
  location: {
    pathname: string
  }
};

const appliancesButtons = [
  <Button text="Novo equipamento" iconComponent={PlusIcon} />,
  <Button buttonType={ButtonType.Secondary} iconComponent={MoreIcon} />
];

export const Appliances = ({
  location
}: AppliancesProps) => {
  return (
    <div>
      <TitleArea 
        title="Equipamentos"
        path={location.pathname}
        buttons={appliancesButtons}
      />
    </div>
  )
}
