// Components
import { SingleCardContent } from '../../Cards';
// Style
import style from './FormContent.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  children: React.ReactNode,
};

/*************************\
 * SingleCardContent Component
\*************************/

export const FormContent = ({ children }: Props) => {
  return (
    <SingleCardContent>
      {children}
    </SingleCardContent>
  )
}
