import style from './Supplies.module.scss';
import { PlainButton } from '../../../../../components/Buttons/PlainButton/PlainButton'
// Icons
import checkIcon from '../../../../../assets/icons/check-blue.svg';
import plusIcon from '../../../../../assets/icons/plus-blue.svg';


export const AddSupply = () => {
  return (
    <PlainButton icon={plusIcon}>
      Adicionar
    </PlainButton>
  )
}

export const AcceptSupply = () => {
  return (
    <PlainButton icon={checkIcon}>
      Aprovar
    </PlainButton>
  )
}