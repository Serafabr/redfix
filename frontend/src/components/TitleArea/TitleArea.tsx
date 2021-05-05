import { Button, ButtonType } from '../Buttons';
import { PageTitle } from '../PageTitle/PageTitle';
import style from './TitleArea.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';

export const TitleArea = () => {
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
