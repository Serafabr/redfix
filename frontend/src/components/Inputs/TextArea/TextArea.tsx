import basicStyle from '../Inputs.module.scss';
import style from './TextArea.module.scss';

export const TextArea = ({...props}) => {
  return (
    <textarea 
      className={`${basicStyle.Input} ${basicStyle.ActiveInput} ${basicStyle.Shadow} ${style.TextArea}`}
      name="textarea" 
      style={{ height: "286px" }}
      {...props}
    ></textarea>
  )
}
