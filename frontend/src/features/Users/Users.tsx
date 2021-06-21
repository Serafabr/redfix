import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button } from '../../components/Buttons';
import { ButtonType } from '../../components/Buttons/Button/_types';

import style from './Users.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../components/Icons';

type UsersProps = {
  location: {
    pathname: string
  }
};

const usersButtons = [
  <Button text="Novo usuário" iconComponent={PlusIcon} />,
  <Button buttonType={ButtonType.Secondary} iconComponent={MoreIcon} />
];

export const Users = ({
  location
}: UsersProps) => {
  return (
    <div>
      <TitleArea 
        title="Usuários"
        path={location.pathname}
        buttons={usersButtons}
      />
    </div>
  )
}
