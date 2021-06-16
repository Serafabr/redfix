import style from './TabPane.module.scss';

type TabPaneTitleT = {
  title: string,
}

export const TabPaneTitle = ({
  title,
}: TabPaneTitleT) => {
  return (
    <div className={style.TabPaneTitle}>
      {title}
    </div>
  )
}
