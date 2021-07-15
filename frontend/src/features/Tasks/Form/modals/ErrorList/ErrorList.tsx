import { Button } from '../../../../../components/Buttons';
import { Modal } from '../../../../../components/Modals';
import style from './ErrorList.module.scss';

import { ButtonType } from '../../../../../components/Buttons/_types';

/*************************\
 * PropTypes
\*************************/

type Props = {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
};

/*************************\
 * ErrorListModal Component
\*************************/

export const ErrorListModal = ({
  isOpen,
  setIsOpen,
}: Props) => {
  
  const handleBackButton = () => {
    setIsOpen(false);
  }
  
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Falha no envio"
      buttons={[
        <Button text="Voltar" buttonType={ButtonType.Warning} onClick={handleBackButton} />,
      ]}
      modalBoxClasses={style.ModalBox}
    >
      <div style={{ minHeight: '130px' }}>
        <div className={style.Title}>
          O formulário apresentou os erros detalhados abaixo:
        </div>
        <ul className={style.Subtitle}>
          <li>Tarefa: não preenchido</li>
          <li>Descrição: não preenchido</li>
        </ul>
      </div>
    </Modal>
  )
}
