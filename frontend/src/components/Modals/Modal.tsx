import { Button, ButtonType } from '../Buttons';
import style from './Modal.module.scss';

export const Modal = () => {
  return (
    <div className={style.Modal}>
      <div className={style.ModalBox}>
        <div className={style.ModalHeader}>
          <span className={style.Title}>Editar progresso</span>
        </div>
        <div className={style.ModalContent}>
          Teste
        </div>
        <div className={style.ModalFooter}>
          <Button
            text="Alterar progresso"
          />
        </div>
      </div>
    </div>
  )
}