import style from './Logs.module.scss';
import { TimelineItem } from '../../../../../components/Timeline';
import { IconColorType } from '../../../../../components/Timeline/_types';
import { UserMessage, StatusMessage, DispatchMessage, CreationMessage } from './SystemMessages';

export enum LogItemActionT { Message, Status, Dispatch, Creation };

const iconColor = {
  [LogItemActionT.Message]: IconColorType.Blue, 
  [LogItemActionT.Status]: IconColorType.Red, 
  [LogItemActionT.Dispatch]: IconColorType.Orange, 
  [LogItemActionT.Creation]: IconColorType.Red,
}

type LogItemT = {
  action: LogItemActionT,
  innerMessage?: string,
  user: string,
  origin?: string,
  destiny?: string,
  oldStatus?: string,
  newStatus?: string,
  logTime: string
}

export const LogItem = ({
  action,
  innerMessage,
  user,
  origin = 'ERRO!!!',
  destiny = 'ERRO!!!',
  oldStatus = 'ERRO!!!',
  newStatus = 'ERRO!!!',
  logTime
}: LogItemT) => {
  
  const systemMessage = {
    [LogItemActionT.Message]: (<UserMessage user={ user } />), 
    [LogItemActionT.Status]: (<StatusMessage user={ user } oldStatus={ oldStatus } newStatus={ newStatus } />), 
    [LogItemActionT.Dispatch]: (<DispatchMessage user={ user } origin={ origin } destiny={ destiny } />), 
    [LogItemActionT.Creation]: (<CreationMessage user={ user } />),
  }
  
  if (action === LogItemActionT.Status || action === LogItemActionT.Creation) {
    innerMessage = undefined;
  }
  
  return (
    <TimelineItem 
      message={systemMessage[action]}
      innerMessage={innerMessage}
      iconColor={iconColor[action]}
      logTime={logTime}
    />
  )
}