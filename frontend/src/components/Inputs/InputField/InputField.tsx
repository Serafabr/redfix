import classNames from 'classnames';
import { ReactNode } from 'react';
// Icons
import { CircleAlert } from '../../Icons';
// Style
import style from './InputField.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  label?: string | null,
  gridArea?: string,
  error?: boolean,
  errorMessage?: string | null,
  children: ReactNode,
};

/*************************\
 * InputField Component
\*************************/

export const InputField = ({
  label = null,
  gridArea,
  error = false,
  errorMessage = null,
  children,
}: Props) => {
  
  // Label classes
  const labelClasses = classNames(
    style.Legend,
    {
      [style.LegendError]: error
    },
  );
  
  const inputDisplayStyle = { gridArea };
  
  // Render component
  return (
    <div style={inputDisplayStyle}>
      {label && (
        <div>
          <label className={labelClasses}>{label}</label>
        </div>
      )}
      <div>
        {children}
      </div>
      {error && errorMessage && (
        <div className={style.ErrorMessageWrapper}>
          <CircleAlert strokeColor="#c23934" />
          <div className={style.ErrorTextMessage}>{errorMessage}</div>
        </div>
      )}
    </div>
  )
}
