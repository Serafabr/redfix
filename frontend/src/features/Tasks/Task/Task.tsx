import { PageTitle } from '../../../components/PageTitle/PageTitle';
import { Button, ButtonType } from '../../../components/Buttons';

import { Plus as PlusIcon } from '../../../components/Icons';

import style from './Task.module.scss';
import { useParams } from 'react-router';

type URLParams = {
  id: string
}

export const Task = () => {
  
  const { id: TaskID } = useParams<URLParams>();
  
  return (
    <div className={style.TitleArea}>
      <PageTitle title={`Tarefa ${TaskID}`} path={`/tarefa/${TaskID}`} />
      <div className={style.Buttons}>
        <div className={style.ButtonWrapper}>
          <Button text="Editar Tarefa" iconComponent={PlusIcon} />
        </div>
        <div className={style.ButtonWrapper}>
          <Button buttonType={ButtonType.Secondary} justIcon iconComponent={PlusIcon} />
        </div>
      </div>
    </div>
  )
}
