import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType } from '../../components/Buttons';

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
  <Button buttonType={ButtonType.Secondary} justIcon iconComponent={MoreIcon} />
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
