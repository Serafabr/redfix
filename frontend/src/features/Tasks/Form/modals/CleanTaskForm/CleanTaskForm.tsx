import { Button } from '../../../../../components/Buttons';
import { Modal } from '../../../../../components/Modals';
import style from './CleanTaskForm.module.scss';

import { ButtonType } from '../../../../../components/Buttons/_types';

/*************************\
 * PropTypes
\*************************/

type Props = {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
  handleCleanState: () => void,
};

/*************************\
 * SelectBox Component
\*************************/

export const ModalCleanTaskForm = ({
  isOpen,
  setIsOpen,
  handleCleanState,
}: Props) => {
  
  const handleBackButton = () => {
    setIsOpen(false);
  }
  
  const handleCleanButton = () => {
    handleCleanState();
    setIsOpen(false);
  }
  
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Limpar formulário"
      buttons={[
        <Button text="Voltar" buttonType={ButtonType.Warning} onClick={handleBackButton} />,
        <Button text="Limpar" buttonType={ButtonType.Danger} onClick={handleCleanButton} />,
      ]}
      modalBoxClasses={style.ModalBox}
    >
      <div style={{ minHeight: '130px' }}>
        <div className={style.Title}>
          Você tem certeza que deseja limpar o formulário?
        </div>
        <div className={style.Subtitle}>
          Ao limpar todo o formulário, todas as informações que já foram preenchidas serão permanentemente apagadas.
        </div>
      </div>
    </Modal>
  )
}
