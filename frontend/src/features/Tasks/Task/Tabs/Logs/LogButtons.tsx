import style from './Logs.module.scss';
import { PlainButton } from '../../../../../components/Buttons/PlainButton/PlainButton'

import plusIcon from '../../../../../assets/icons/plus-blue.svg';

export const NewMessage = () => {
  return (
    <PlainButton icon={plusIcon}>
      Nova Mensagem
    </PlainButton>
  )
}
