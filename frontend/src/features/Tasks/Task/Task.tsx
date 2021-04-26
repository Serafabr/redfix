import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Button, ButtonType } from '../../components/Buttons';

import { Plus as PlusIcon } from '../../components/Icons';

export const Task = () => {
  return (
    <div className={style.TitleArea}>
      <PageTitle title="Tarefa" path="/tarefas" />
      <div className={style.Buttons}>
        <div className={style.ButtonWrapper}>
          <Button text="Nova Tarefa" iconComponent={PlusIcon} />
        </div>
        <div className={style.ButtonWrapper}>
          <Button buttonType={ButtonType.Secondary} justIcon iconComponent={PlusIcon} />
        </div>
      </div>
    </div>
  )
}
