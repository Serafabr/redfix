// Components
import { CardHeader, CardTitle } from '../../Cards';
import { Badge } from '../../Badges';
// Style
import style from './FormHeader.module.scss';
// Types
import { ColorType } from '../../Badges/_types';
import { FormSituationType } from '../_types';

/*************************\
 * PropTypes
\*************************/

type Props = {
  title: string,
  subtitle: string,
  badgeText: string,
  situation: FormSituationType,
};

// Select badge color based on situation

const badgeColor = {
  [FormSituationType.Ok]: ColorType.Green,
  [FormSituationType.Incomplete]: ColorType.Orange,
  [FormSituationType.Error]: ColorType.Red,
}

/*************************\
 * SelectBox Component
\*************************/

export const FormHeader = ({
  title,
  subtitle,
  badgeText,
  situation
}: Props) => {
  return (
    <CardHeader>
        <div className={style.FormHeaderContainer}>
          <div className={style.FormTitle}>
            <CardTitle
              title={title}
              subtitle={subtitle}
            />
          </div>
          <div className={style.FormBadge}>
            <Badge text={badgeText} color={badgeColor[situation]} />
          </div>
        </div>
    </CardHeader>
  )
}