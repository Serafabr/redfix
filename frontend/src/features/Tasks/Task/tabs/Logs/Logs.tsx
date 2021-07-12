import style from './Logs.module.scss';

import ellipseBlue from '../../../../../assets/icons/logTab/ellipse-blue.svg';
import ellipseRed from '../../../../../assets/icons/logTab/ellipse-red.svg';
import ellipseOrange from '../../../../../assets/icons/logTab/ellipse-orange.svg';
import ellipseGray from '../../../../../assets/icons/logTab/ellipse-gray.svg';
import { TimelineFilter } from '../../../../../components/temp';
import { TimelineButtonContainer } from '../../../../../components/temp/TimelineButtons/TimelineButtonContainer';
import { TimelineCleanFilter, TimelineItem } from '../../../../../components/temp';
import { LogItem, LogItemActionT } from './LogItem';
import { PlainButton } from '../../../../../components/Buttons/PlainButton/PlainButton';
import { NewMessage } from './LogButtons';

export const Logs = () => {
  return (
    <>
      <TimelineButtonContainer>
        <TimelineFilter 
          text="Mensagens"
          icon={ellipseBlue}
        />
        <TimelineFilter 
          text="Alterações de Status"
          icon={ellipseRed}
        />
        <TimelineFilter 
          text="Tramitações"
          icon={ellipseOrange}
        />
        <div className={style.CleanButtonContainer}>
          <TimelineCleanFilter />
        </div>
      </TimelineButtonContainer>
      <div className={style.LogsWrapper}>
        <LogItem 
          action={LogItemActionT.Message}
          innerMessage="Aguardando a chegada dos materiais elétricos."
          user="Pedro Serafim"
          logTime="18/01/2021 às 02:03:54 pm"
        />
        <LogItem 
          action={LogItemActionT.Status}
          user="Pedro Serafim"
          logTime="18/01/2021 às 02:03:54 pm"
          oldStatus="Em análise"
          newStatus="Em execução"
        />
        <LogItem 
          action={LogItemActionT.Message}
          innerMessage="Aguardando a chegada dos materiais elétricos. Aguardando a chegada dos materiais elétricos. Aguardando a chegada dos materiais elétricos. Aguardando a chegada dos materiais elétricos. Aguardando a chegada dos materiais elétricos."
          user="Felipe Brandão"
          logTime="18/01/2021 às 02:03:54 pm"
          oldStatus="Fila de espera"
          newStatus="Em análise"
        />
        <LogItem 
          action={LogItemActionT.Message}
          innerMessage="Deverá ser analisada a possibilidade de troca de disjuntor."
          user="Lauro Alves"
          logTime="18/01/2021 às 02:03:54 pm"
        />
        <LogItem 
          action={LogItemActionT.Dispatch}
          innerMessage="Aguardando a chegada dos materiais elétricos."
          user="Pedro Serafim"
          origin="Seplag"
          destiny="Coemant"
          logTime="18/01/2021 às 02:03:54 pm"
        />
        <LogItem 
          action={LogItemActionT.Creation}
          innerMessage="Aguardando a chegada dos materiais elétricos."
          user="Henrique Zaidan"
          logTime="18/01/2021 às 02:03:54 pm"
        />
        <PlainButton>
          Mostrar mais ...
        </PlainButton>
        <PlainButton>
          Mostrar tudo
        </PlainButton>
      </div>
    </>
  )
}
