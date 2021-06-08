import style from './Logs.module.scss';

import ellipseBlue from '../../../../../assets/icons/log/ellipse-blue.svg';
import ellipseRed from '../../../../../assets/icons/log/ellipse-red.svg';
import ellipseOrange from '../../../../../assets/icons/log/ellipse-orange.svg';
import ellipseGray from '../../../../../assets/icons/log/ellipse-gray.svg';

export const Logs = () => {
  return (
    <div>
      <div className={style.FilterBar}>
        <button className={style.LogButton}>
          <img src={ellipseBlue} alt="Nova mensagem" />
          Mensagens
        </button>
        <button className={style.LogButton}>
          <img src={ellipseOrange} alt="Nova mensagem" />
          Alterações de Status
        </button>
        <button className={style.LogButton}>
          <img src={ellipseRed} alt="Nova mensagem" />
          Tramitações
        </button>
        <button className={`${style.LogButton} ${style.Inactive}`}>
          <img src={ellipseGray} alt="Nova mensagem" />
          Tramitações
        </button>
      </div>
      <div className={style.LogsWrapper}>
        <div className={style.Log}>
          <img className={style.Icon} src={ellipseBlue} alt="Mensagem" />
          <div className={style.MessageBox}>
          <div className={style.SystemMessage}><span className={style.Highlight}>Pedro Serafim</span> escreveu:</div>
            <div className={style.UserMessage}> Aguardando a chegada dos materiais.</div>
            <div className={style.LogTime}>18/01/2021 às 02:01:28 pm</div>
          </div>
        </div>
        <div className={style.Log}>
          <img className={style.Icon} src={ellipseBlue} alt="Mensagem" />
          <div className={style.MessageBox}>
            <div className={style.SystemMessage}><span className={style.Highlight}>Pedro Serafim</span> escreveu:</div>
            <div className={style.UserMessage}> Aguardando a chegada dos materiais.</div>
            <div className={style.LogTime}>18/01/2021 às 02:01:28 pm</div>
          </div>
        </div>
        <div className={style.Log}>
          <img className={style.Icon} src={ellipseBlue} alt="Mensagem" />
          <div className={style.MessageBox}>
          <div className={style.SystemMessage}><span className={style.Highlight}>Pedro Serafim</span> escreveu:</div>
            <div className={style.UserMessage}> Segue a tarefa após o ajuste de todos os materiais.</div>
            <div className={style.LogTime}>18/01/2021 às 02:01:28 pm</div>
          </div>
        </div>
        <div className={style.Log}>
          <img className={style.Icon} src={ellipseRed} alt="Mensagem" />
          <div className={style.MessageBox}>
          <div className={style.SystemMessage}><span className={style.Highlight}>Pedro Serafim</span> tramitou a tarefa da <span className={style.Highlight}>Coemant</span> para <span className={style.Highlight}>Seplag</span>.</div>
            <div className={style.UserMessage}> Aguardando a chegada dos materiais.</div>
            <div className={style.LogTime}>18/01/2021 às 02:01:28 pm</div>
          </div>
        </div>
        <div className={style.Log}>
          <img className={style.Icon} src={ellipseOrange} alt="Mensagem" />
          <div className={style.MessageBox}>
          <div className={style.SystemMessage}><span className={style.Highlight}>Pedro Serafim</span> alterou o status de <span className={style.Highlight}>Em análise</span> para <span className={style.Highlight}>Em execução</span>.</div>
            <div className={style.LogTime}>18/01/2021 às 02:01:28 pm</div>
          </div>
        </div>
        <button className={style.MoreButton}>
          Mostrar mais...
        </button>
      </div>
    </div>
  )
}
