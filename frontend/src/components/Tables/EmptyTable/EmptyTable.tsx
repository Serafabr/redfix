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
    <div>
      <div>Você ainda não anexou suprimentos nessa tarefa</div>
      <div>
        Suprimento é todo material ou serviço que pode ser utilizado na execução de uma tarefa.
      </div>
      <Button 
        text="Adicionar suprimento"
        buttonType={ButtonType.Secondary}
        icon={plusBlus}
      />
    </div>
  )
}
