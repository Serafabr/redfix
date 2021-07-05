import { ReactNode } from 'react';
// Component
import { PageTitle } from '../PageTitle/PageTitle';
// Style
import style from './TitleArea.module.scss';

/*************************\
 * PropTypes
\*************************/

type Props = {
  title: string,
  path: string,
  buttons: Array<ReactNode>
}

/*************************\
 * SelectBox Component
\*************************/

export const TitleArea = ({
  title,
  path,
  buttons
} : Props) => {
  return (
    <div className={style.TitleArea}>
      <PageTitle title={title} path={path} />
      <div className={style.Buttons}>
        {buttons.map((button) => (
          <div className={style.ButtonWrapper}>
            {button}
          </div>
        ))}
      </div>
    </div>
  )
}
