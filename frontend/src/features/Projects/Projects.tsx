import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button } from '../../components/Buttons';
import { ButtonType } from '../../components/Buttons/Button/_types';

import style from './Projects.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { MoreHorizontal as MoreIcon } from '../../components/Icons';


type ProjectProps = {
  location: {
    pathname: string
  }
};

const projectsButtons = [
  <Button text="Novo projeto" iconComponent={PlusIcon} />,
  <Button buttonType={ButtonType.Secondary} iconComponent={MoreIcon} />
];

export const Projects = ({
  location
}: ProjectProps) => {
  return (
    <div>
      <TitleArea 
        title="Projetos"
        path={location.pathname}
        buttons={projectsButtons}
      />
    </div>
  )
}
