import { ReactNode } from 'react';

import { Button } from '../Buttons';
import { ButtonType } from '../Buttons/Button/_types';
import { PageTitle } from '../PageTitle/PageTitle';
import style from './TitleArea.module.scss';

import { Plus as PlusIcon } from '../../components/Icons';

type TitleAreaType = {
  title: string,
  path: string,
  buttons: Array<ReactNode>
}

export const TitleArea = ({
  title,
  path,
  buttons
} : TitleAreaType) => {
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
