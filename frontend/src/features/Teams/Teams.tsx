import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button } from '../../components/Buttons';

import { ButtonType } from '../../components/Buttons/Button/_types';

import style from './Teams.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../components/Icons';

type TeamsProps = {
  location: {
    pathname: string
  }
};

const teamsButtons = [
  <Button text="Nova equipe" iconComponent={PlusIcon} />,
  <Button buttonType={ButtonType.Secondary} iconComponent={MoreIcon} />
];

export const Teams = ({
  location
}: TeamsProps) => {
  return (
    <div>
      <TitleArea 
        title="Equipes"
        path={location.pathname}
        buttons={teamsButtons}
      />
    </div>
  )
}
