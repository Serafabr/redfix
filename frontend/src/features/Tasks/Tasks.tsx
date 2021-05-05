import { PageTitle } from '../../components/PageTitle/PageTitle';
import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType } from '../../components/Buttons';
import style from './Task.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { taskColumns } from '../../utils/fakeData';

type TasksProps = {
  location: {
    pathname: string
  }
};

const taskButtons = [
  <Button text="Nova tarefa" iconComponent={PlusIcon} />,
  <Button buttonType={ButtonType.Secondary} justIcon iconComponent={PlusIcon} />
];

export const Tasks = ({
  location
}: TasksProps) => {
  return (
    <div>
      <TitleArea 
        title="Tarefas"
        path={location.pathname}
        buttons={taskButtons}
      />
    </div>
  )
}
