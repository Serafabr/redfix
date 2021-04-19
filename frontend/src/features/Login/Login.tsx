import style from './Login.module.scss';
import blueLogo from '../../assets/logo/blue-logo.svg';

export const Login = () => {
  return (
    <div className={style.Login}>
      <div className={style.Logo}>
        <img src={blueLogo} alt=""/>
      </div>
    </div>
  )
}
