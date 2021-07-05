// Components
import { Button } from '../../../../../components/Buttons'
import { Modal } from '../../../../../components/Modals';
import { DragAndDropFiles } from '../../../../../components/DragAndDrop';
// Style
import style from './TaskFiles.module.scss';
import { useState } from 'react';
// Types
import { ButtonType } from '../../../../../components/Buttons/_types';

/*************************\
 * PropTypes
\*************************/

type Props = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<boolean>,
};

/*************************\
 * AddAssetModal Component
\*************************/

export const AddFileModal = ({
  isOpen,
  setIsOpen,
}: Props) => {
  
  const [ files, setFiles ] = useState<Array<FileList>>([]);
  
  return (
    <Modal
      modalBoxClasses={style.ModalBox}
      title="Adicionar arquivo"
      isOpened={isOpen}
      setIsOpened={setIsOpen}
      buttons={[ <Button text="Adicionar"/>]}
    >
      <div className={style.ModalExplanation}>
        Adicione novos arquivos a sua tarefa: memorandos, notas técnicas, notas fiscais, relatórios... O RedFix aceita arquivos com qualquer extensão.
      </div>
      <div className={style.ModalInputs}>
        <DragAndDropFiles />
      </div>
      <div className={style.LoadingFile}>
        Fazendo upload.... 24%
      </div>
    </Modal>
  )
}
