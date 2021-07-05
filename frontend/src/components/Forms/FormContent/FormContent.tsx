// Components
import { SingleCardContent } from '../../Cards';
// Style
import style from './FormContent.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  marginBottom?: boolean,
  children: React.ReactNode,
};

/*************************\
 * SingleCardContent Component
\*************************/

export const FormContent = ({ marginBottom = false, children }: Props) => {
  return (
    <div className={`${marginBottom ? style.AddMarginBottom : ""}`}>
      <SingleCardContent>
        {children}
      </SingleCardContent>
    </div>
  )
}
