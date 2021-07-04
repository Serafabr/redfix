import { Button } from '../../../../../components/Buttons'
import { Modal } from '../../../../../components/Modals'

export const AddAssetModal = () => {
  return (
    <Modal
      title="Adicionar ativo"
      isOpened={true}
      setIsOpened={()=>{}}
      buttons={[<Button text="Adicionar"/>]}
    >
      Adicionar um novo ativo
    </Modal>
  )
}
