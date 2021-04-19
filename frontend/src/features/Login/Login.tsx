import style from './Login.module.scss';
import blueLogo from '../../assets/logo/blue-logo.svg';

export const Login = () => {
  return (
    <div className={style.Login}>
      <div className={style.Logo}>
        <img src={blueLogo} alt=""/>
      </div>
      <div className={style.CardBox}>
        <div className={style.Content}>
          <form action="#">
            <label htmlFor="email">E-mail</label>
            <input type="text" placeholder="Digite seu e-mail..."/>
            <label htmlFor="password">Senha</label>
            <input type="text" placeholder="Digite sua senha..."/>
          </form>
        </div>
      </div>
    </div>
  )
}
