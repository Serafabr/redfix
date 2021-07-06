// Styles
import basicStyle from '../Inputs.module.scss';
import style from './TextArea.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  className?: string,
  [property: string]: any,
};

/*************************\
 * SelectBox Component
\*************************/

export const TextArea = ({
  className,
  ...rest
}: Props) => {
  return (
    <textarea 
      className={`${basicStyle.Input} ${basicStyle.ActiveInput} ${basicStyle.Shadow} ${style.TextArea} ${className}`}
      name="textarea" 
      {...rest}
    ></textarea>
  )
}
