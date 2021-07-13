import { Button } from '../../../../../components/Buttons';
import { Modal } from '../../../../../components/Modals';
import style from './CancelCreateTask.module.scss';

import { ButtonType } from '../../../../../components/Buttons/_types';

/*************************\
 * PropTypes
\*************************/

type Props = {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
};

/*************************\
 * SelectBox Component
\*************************/

export const ModalCancelCreateTask = ({
  isOpen,
  setIsOpen,
}: Props) => {
  
  const handleBackButton = () => {
    setIsOpen(false);
  }
  
  const handleCancelButton = () => {
    setIsOpen(false);
  }
  
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Cancelar criação"
      buttons={[
        <Button text="Voltar" buttonType={ButtonType.Warning} onClick={handleBackButton} />,
        <Button text="Cancelar" buttonType={ButtonType.Danger} onClick={handleCancelButton} />,
      ]}
      modalBoxClasses={style.ModalBox}
    >
      <div style={{ minHeight: '130px' }}>
        <div className={style.Title}>
          Você tem certeza que deseja cancelar?
        </div>
        <div className={style.Subtitle}>
          Ao cancelar a criação de uma tarefa, todas as informações preenchidas serão permanentemente deletadas.
        </div>
      </div>
    </Modal>
  )
}
