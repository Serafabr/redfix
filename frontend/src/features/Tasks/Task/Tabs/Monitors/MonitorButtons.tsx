import style from './Supplies.module.scss';
import { PlainButton } from '../../../../../components/Buttons/PlainButton/PlainButton'
// Icons
import plusIcon from '../../../../../assets/icons/plus-blue.svg';


export const AddMeasure = () => {
  return (
    <PlainButton icon={plusIcon}>
      Adicionar medição
    </PlainButton>
  )
}