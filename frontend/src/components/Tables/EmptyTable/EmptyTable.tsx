// Components
import { Button } from '../../Buttons';
// Style
import style from './EmptyTable.module.scss';
// Icon
import plusBlus from '../../../assets/icons/plus-blue.svg';
// Types
import { ButtonType } from '../../Buttons/Button/_types';


export const EmptyTable = () => {
  return (
    <div className={style.EmptyTable}>
      <div className={style.Title}>
        Você ainda não anexou suprimentos nessa tarefa
      </div>
      <div className={style.Subtitle}>
        Suprimento é todo material ou serviço que pode ser utilizado durante a execução de uma tarefa. Este não é um campo obrigatório, e poderá ser preenchido posteriormente.
      </div>
      <div className={style.ButtonWrapper}>
        <Button 
          text="Adicionar suprimento"
          buttonType={ButtonType.Secondary}
          icon={plusBlus}
        />
      </div>
    </div>
  )
}
