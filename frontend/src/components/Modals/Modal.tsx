import { useState } from 'react';

import { Button, ButtonType } from '../Buttons';
import style from './Modal.module.scss';
import closeIcon from '../../assets/icons/modal/close.svg';
import closeIconHovered from '../../assets/icons/modal/hovered/close.svg';

type Props = {
  isOpened?: boolean,
  setIsOpened: () => void
};

export const Modal = ({
  isOpened = false,
  setIsOpened
}: Props) => {
  
  const [ isCloseIconHovered, setIsCloseIconHovered ] = useState<boolean>(false);
  
  const handleBackgroundOnClick = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as any).id === "modal") {
      console.log("Close modal");
    }
  };
  
  const handleCloseIconHover = (mouseEntered: boolean) => {
    setIsCloseIconHovered(mouseEntered)
  }
  
  return (
    <div id="modal" className={`${style.Modal} ${style.Closed}`} onClick={handleBackgroundOnClick}>
      <div className={style.ModalBox}>
        <div className={style.ModalHeader}>
          <span className={style.Title}>Editar progresso</span>
          <div className={style.IconWrapper} onMouseEnter={() => {handleCloseIconHover(true)}} onMouseLeave={() => {handleCloseIconHover(false)}}>
            <img src={isCloseIconHovered ? closeIconHovered : closeIcon} alt="Fechar"/>
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