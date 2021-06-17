import { ReactNode, useState } from 'react';

import { Button, ButtonType } from '../Buttons';
import style from './Modal.module.scss';
import closeIcon from '../../assets/icons/modal/close.svg';
import closeIconHovered from '../../assets/icons/modal/hovered/close.svg';

type Props = {
  isOpened: boolean,
  setIsOpened: (isOpened: boolean) => void,
  title: string,
  hasFooter?: boolean,
  buttons?: ReactNode,
  children?: ReactNode,
};

export const Modal = ({
  isOpened,
  setIsOpened,
  title,
  hasFooter = true,
  buttons,
  children
}: Props) => {
  
  const [ isCloseIconHovered, setIsCloseIconHovered ] = useState<boolean>(false);
  
  const handleBackgroundOnClick = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as any).id === "modal") {
      setIsOpened(false);
    }
  };
  
  const handleCloseIconHover = (mouseEntered: boolean) => {
    setIsCloseIconHovered(mouseEntered)
  }
  
  return (
    <div id="modal" className={`${style.Modal} ${!isOpened && style.Closed}`} onClick={handleBackgroundOnClick}>
      <div className={style.ModalBox}>
        <div className={style.ModalHeader}>
          <span className={style.Title}>{title}</span>
          <div className={style.IconWrapper} onMouseEnter={() => {handleCloseIconHover(true)}} onMouseLeave={() => {handleCloseIconHover(false)}}>
            <img src={isCloseIconHovered ? closeIconHovered : closeIcon} alt="Fechar" onClick={() => setIsOpened(false)}/>
          </div>
        </div>
        <div className={style.ModalContent}>
          {children}
        </div>
        {hasFooter && (
          <div className={style.ModalFooter}>
            {buttons}
          </div>
        )}
      </div>
    </div>
  )
}