import style from './Sidebar.module.scss';

import logo from '../../../assets/logo/white-logo.svg';

export const AppSidebarHeader = () => {
  return (
    <div className={style.AppSidebarHeader}>
      <div className={style.ImgWrapper}>
        <img src={logo} alt="RedFix"/>
      </div>
      <div className={style.Version}>
        v.1.0.0
      </div>
    </div>
  )
}
