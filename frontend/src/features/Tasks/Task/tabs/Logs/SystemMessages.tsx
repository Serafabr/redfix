import style from './Logs.module.scss';

type UserMessageT = { user: string };
type StatusMessageT = { user: string, oldStatus: string, newStatus: string };
type DispatchMessageT = { user: string, origin: string, destiny: string };
type CreationMessageT = { user: string };

export const UserMessage = ({
  user
}: UserMessageT) => (
  <><span className={style.Highlight}>{user}</span> adicionou o seguinte comentário:</>
);

export const StatusMessage = ({
  user,
  oldStatus,
  newStatus
}: StatusMessageT) => (
  <><span className={style.Highlight}>{user}</span> alterou o status desta tarefa de <span className={style.Highlight}>{oldStatus}</span> para <span className={style.Highlight}>{newStatus}</span>.</>
);

export const DispatchMessage = ({
  user,
  origin,
  destiny
}: DispatchMessageT) => (
  <><span className={style.Highlight}>{user}</span> tramitou a tarefa de <span className={style.Highlight}>{origin}</span> para <span className={style.Highlight}>{destiny}</span>, com o seguinte despacho:</>
);

export const CreationMessage = ({
  user
}: CreationMessageT) => (
  <><span className={style.Highlight}>{user}</span> criou esta tarefa.</>
);