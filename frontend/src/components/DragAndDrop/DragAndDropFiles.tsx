// Components
import { useRef } from 'react';
import { PlainButton } from '../Buttons';
// Style
import style from './DragAndDropFiles.module.scss';

export const DragAndDropFiles = () => {
  
  const inputFile = useRef(null);
  
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    //inputFile.click();
  };
  
  return (
    <div className={style.DragAndDropFile}>
      <div className={style.DragAndDropText}>
        Solte seus arquivos aqui ou pesquise em seu
        <PlainButton>
          computador
        </PlainButton>
        <input 
          type='file' 
          id='file' 
          ref={inputFile} 
          style={{display: 'none'}} 
        />
      </div>
    </div>
  )
}
