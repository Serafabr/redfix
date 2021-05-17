import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType } from '../../components/Buttons';

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
  <Button buttonType={ButtonType.Secondary} justIcon iconComponent={MoreIcon} />
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