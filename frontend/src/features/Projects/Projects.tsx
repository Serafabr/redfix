import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType } from '../../components/Buttons';

import style from './Projects.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';

type ProjectProps = {
  location: {
    pathname: string
  }
};

const projectsButtons = [
  <Button text="Novo projeto" iconComponent={PlusIcon} />,
  <Button buttonType={ButtonType.Secondary} justIcon iconComponent={PlusIcon} />
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
