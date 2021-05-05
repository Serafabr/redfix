import { PageTitle } from '../../components/PageTitle/PageTitle';
import { TitleArea } from '../../components/TitleArea/TitleArea';
import { Button, ButtonType } from '../../components/Buttons';
import style from './Task.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';
import { taskColumns } from '../../utils/fakeData';

const taskButtons = [
  <Button text="Nova Tarefa" iconComponent={PlusIcon} />,
  <Button buttonType={ButtonType.Secondary} justIcon iconComponent={PlusIcon} />
];

export const Tasks = (props: any) => {
  console.log('props');
  console.log(props);
  return (
    <div>
      <TitleArea 
        title="Tarefas"
        path="/tarefas"
        buttons={taskButtons}
      />
    </div>
  )
}
