import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType } from '../../components/Buttons';

import style from './Plans.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../components/Icons';

type PlansProps = {
  location: {
    pathname: string
  }
};

const plansButtons = [
  <Button text="Novo plano" iconComponent={PlusIcon} />,
  <Button buttonType={ButtonType.Secondary} justIcon iconComponent={MoreIcon} />
];

export const Plans = ({
  location
}: PlansProps) => {
  return (
    <div>
      <TitleArea 
        title="Planos de manutenção"
        path={location.pathname}
        buttons={plansButtons}
      />
    </div>
  )
}
