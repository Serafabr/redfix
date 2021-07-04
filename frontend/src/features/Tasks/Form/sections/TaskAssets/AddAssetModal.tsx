// Components
import { Button } from '../../../../../components/Buttons'
import { Modal } from '../../../../../components/Modals'
// Style
import style from './TaskAssets.module.scss';


export const AddAssetModal = () => {
  return (
    <Modal
      modalBoxClasses={style.ModalBox}
      title="Adicionar ativo"
      isOpened={true}
      setIsOpened={()=>{}}
      buttons={[<Button text="Adicionar"/>]}
    >
      Adicionar um novo ativo
    </Modal>
  )
}
