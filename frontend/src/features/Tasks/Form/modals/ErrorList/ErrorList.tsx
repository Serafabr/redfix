import { Button } from '../../../../../components/Buttons';
import { Modal } from '../../../../../components/Modals';
import style from './ErrorList.module.scss';

import { ButtonType } from '../../../../../components/Buttons/_types';
import { TaskFormStateType } from '../../_types';
import { displayErrors } from '../../data/displayErrors';

/*************************\
 * Types
\*************************/

type Errors = { [key: string]: { [key: string]: string } | null }

/*************************\
 * Helper variables
\*************************/

const errorOrder = [
  'task',
  'place',
  'description',
  'team',
  'category',
  'priority',
  'status',
  'project',
  'startDate',
  'limitDate',
  'assets',
];

/*************************\
 * PropTypes
\*************************/

type Props = {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
  taskForm: TaskFormStateType,
};

/*************************\
 * ErrorListModal Component
\*************************/

export const ErrorListModal = ({
  isOpen,
  setIsOpen,
  taskForm,
}: Props) => {
  
  if (!isOpen) {
    return null;
  }
  
  const handleBackButton = () => {
    setIsOpen(false);
  }
  
  const errors: Errors = displayErrors(taskForm);
  
  console.log('errors');
  console.log(errors);
  
  const displayErrorsElement = errorOrder.map((inputId: string) => (
    errors[inputId] && (<li><span className={style.ErrorInputName}>{errors[inputId]?.inputName}</span>: {errors[inputId]?.description}.</li>)
  ))
  
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
          O formulário apresentou os seguintes erros:
        </div>
        <ul className={style.Subtitle}>
          {displayErrorsElement}
        </ul>
      </div>
    </Modal>
  )
}
