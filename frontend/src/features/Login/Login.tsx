import style from './Login.module.scss';
import blueLogo from '../../assets/logo/blue-logo.svg';
import { Input } from '../../components/Inputs';
import { Button } from '../../components/Buttons';

export const Login = () => {
  return (
    <div className={style.Login}>
      <div className={style.Logo}>
        <img src={blueLogo} alt="RedFix"/>
      </div>
      <div className={style.CardBox}>
        <div className={style.Content}>
          <form action="#">
            <div className={style.Input}>
              <Input label="E-mail" type="text" placeholder="Digite seu e-mail..."/>
            </div>
            <div className={style.Input}>
              <Input label="Senha" type="password" placeholder="Digite sua senha..."/>
            </div>
            <div className={style.ButtonsContainer}>
              <a className={style.ForgotPass} href="#">Esqueceu a senha?</a>
              <Button text="Entrar" />
            </div>
          </form>
        </div>
      </div>
      <div className={style.RequestAccess}>
        <span>Não tem acesso? Solicite seu cadastro</span>
      </div>
    </div>
  )
}
