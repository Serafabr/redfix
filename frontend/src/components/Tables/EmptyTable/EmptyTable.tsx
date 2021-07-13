// Components
import { Button } from '../../Buttons';
// Style
import style from './EmptyTable.module.scss';
// Icon
import plusBlue from '../../../assets/icons/plus-blue.svg';
// Types
import { ButtonType } from '../../Buttons/_types';

/*************************\
 * PropTypes
\*************************/

type Props = {
  title: string,
  subtitle: string,
  buttonName: string,
  buttonOnClick: () => void,
};

/*************************\
 * EmptyTable Component
\*************************/

export const EmptyTable = ({
  title,
  subtitle,
  buttonName,
  buttonOnClick,
}: Props) => {
  return (
    <div className={style.EmptyTable}>
      <div className={style.Title}>
        {title}
      </div>
      <div className={style.Subtitle}>
        {subtitle}
      </div>
      <div className={style.ButtonWrapper}>
        <Button 
          text={buttonName}
          buttonType={ButtonType.Secondary}
          icon={plusBlue}
          onClick={buttonOnClick}
        />
      </div>
    </div>
  )
}
