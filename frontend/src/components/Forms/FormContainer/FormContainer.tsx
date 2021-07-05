// Components
import { Card } from '../../Cards';
// Style
import style from './FormContainer.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  children: React.ReactNode,
};

/*************************\
 * SingleCardContent Component
\*************************/

export const FormContainer = ({ children }: Props) => {
  return (
    <Card>
      {children}
    </Card>
  )
}
