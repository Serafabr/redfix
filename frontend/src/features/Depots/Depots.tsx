import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button } from '../../components/Buttons';
import { ButtonType } from '../../components/Buttons/Button/_types';

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
  <Button buttonType={ButtonType.Secondary} iconComponent={MoreIcon} />
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
