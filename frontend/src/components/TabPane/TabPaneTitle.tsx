import style from './TabPane.module.scss';

/*************************\
 * PropTypes
\*************************/

type TabPaneTitleT = {
  title: string,
}

/*************************\
 * TabPane Component
\*************************/

export const TabPaneTitle = ({
  title,
}: TabPaneTitleT) => {
  return (
    <div className={style.TabPaneTitle}>
      {title}
    </div>
  )
}
