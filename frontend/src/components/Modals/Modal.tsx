import { ReactNode, useState } from 'react';
// Style
import style from './Modal.module.scss';
// Icons
import closeIcon from '../../assets/icons/modal/close.svg';
import closeIconHovered from '../../assets/icons/modal/hovered/close.svg';

/*************************\
 * PropTypes
\*************************/

type Props = {
  isOpen: boolean,
  setisOpen: (isOpen: boolean) => void,
  title: string,
  hasFooter?: boolean,
  buttons?: Array<ReactNode>,
  modalBoxClasses?: string,
  children?: ReactNode,
};

/*************************\
 * Modal Component
\*************************/

export const Modal = ({
  isOpen,
  setisOpen,
  title,
  hasFooter = true,
  buttons,
  modalBoxClasses,
  children
}: Props) => {
  
  // Control close icon hover
  const [ isCloseIconHovered, setIsCloseIconHovered ] = useState<boolean>(false);
  
  // Handlers
  const handleCloseIconHover = (mouseEntered: boolean) => {
    setIsCloseIconHovered(mouseEntered)
  }
  
  const handleBackgroundOnClick = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as any).id === "modal") {
      setisOpen(false);
    }};
  
  // Render component
  return (
    <div id="modal" className={`${style.Modal} ${isOpen && style.Opened}`} onClick={handleBackgroundOnClick}>
      <div className={`${style.ModalBox} ${modalBoxClasses}`}>
        <div className={style.ModalHeader}>
          <span className={style.Title}>{title}</span>
          <div className={style.IconWrapper} onMouseEnter={() => {handleCloseIconHover(true)}} onMouseLeave={() => {handleCloseIconHover(false)}}>
            <img src={isCloseIconHovered ? closeIconHovered : closeIcon} alt="Fechar" onClick={() => setisOpen(false)}/>
          </div>
        </div>
        <div className={style.ModalContent}>
          {children}
        </div>
        {hasFooter && (
          <div className={style.ModalFooter}>
            {buttons?.map((button) => (
              <div className={style.ButtonWrapper}>
                {button}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}