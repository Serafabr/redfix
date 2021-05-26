import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType } from '../../components/Buttons';

import style from './Depots.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../components/Icons';

type DepotsProps = {
  location: {
    pathname: string
  }
};

const depotsButtons = [
  <Button text="Novo estoque" iconComponent={PlusIcon} />,
  <Button buttonType={ButtonType.Secondary} justIcon iconComponent={MoreIcon} />
];


export const Depots = ({
  location
}: DepotsProps) => {
  return (
    <div>
      <TitleArea 
        title="Estoques"
        path={location.pathname}
        buttons={depotsButtons}
      />
    </div>
  )
}
