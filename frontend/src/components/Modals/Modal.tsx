import { Button, ButtonType } from '../Buttons';
import style from './Modal.module.scss';
import closeIcon from '../../assets/icons/modal/close.svg';
import closeIconHovered from '../../assets/icons/modal/hovered/close.svg';

export const Modal = () => {
  
  const handleBackgroundOnClick = () => {
    console.log("Fechar modal");
  };
  
  const handleMouseEnter = () => {
    console.log("Mouse Enter");
  }
  
  return (
    <div className={style.Modal}>
      <div className={style.Background}/>
      <div className={style.ModalBox}>
        <div className={style.ModalHeader}>
          <span className={style.Title}>Editar progresso</span>
          <div className={style.IconWrapper} onMouseEnter={() => {handleMouseEnter()}} onMouseLeave={() => {handleMouseEnter()}}>
            <img src={closeIcon} alt="Fechar"/>
          </div>
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