import { Button } from '../../../../../components/Buttons';
import { Modal } from '../../../../../components/Modals';
import style from './CancelCreateTask.module.scss';

import { ButtonType } from '../../../../../components/Buttons/_types';

export const CancelCreateTask = () => {
  return (
    <Modal
      isOpened={true}
      setIsOpened={()=>{}}
      title="Cancelar criação"
      buttons={[
        <Button text="Voltar" buttonType={ButtonType.Warning} onClick={()=>{}} />,
        <Button text="Cancelar" buttonType={ButtonType.Danger} onClick={()=>{}} />,
      ]}
      modalBoxClasses={style.ModalBox}
    >
      <div className={style.Title}>
        Você tem certeza que deseja cancelar?
      </div>
      <div className={style.Subtitle}>
        Ao cancelar a criação de uma tarefa, todas as informações preenchidas serão permanentemente deletadas.
      </div>
    </Modal>
  )
}
