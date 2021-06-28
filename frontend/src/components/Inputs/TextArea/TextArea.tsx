import basicStyle from '../Inputs.module.scss';
import style from './TextArea.module.scss';

export const TextArea = () => {
  return (
    <textarea 
      className={`${basicStyle.Input} ${basicStyle.ActiveInput} ${style.TextArea}`}
      name="textarea" 
      rows={4}
    ></textarea>
  )
}
