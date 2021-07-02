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
  step?: number,
  totalSteps?: number,
  situation?: FormSituationType,
};

// Select badge color based on situation

const badgeColor = {
  [FormSituationType.Ok]: ColorType.Green,
  [FormSituationType.Error]: ColorType.Red,
}

// Select text based on situation

const badgeText = {
  [FormSituationType.Ok]: 'Preenchimento correto',
  [FormSituationType.Error]: 'Preenchimento incorreto',
}

/*************************\
 * SelectBox Component
\*************************/

export const FormHeader = ({
  title,
  subtitle,
  step = 1,
  totalSteps = 1,
  situation = FormSituationType.Ok,
}: Props) => {
  return (
    <CardHeader>
        <div className={style.FormHeaderContainer}>
          <div className={style.FormTitle}>
            <CardTitle
              title={title}
              subtitle={subtitle}
              badges={[
                <Badge text={`Etapa ${step} de ${totalSteps}`} color={ColorType.Orange} />, 
                <Badge text={badgeText[situation]} color={badgeColor[situation]} />
              ]}
            />
          </div>
          <div className={style.FormBadge}>
            Botão
          </div>
        </div>
    </CardHeader>
  )
}
