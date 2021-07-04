// Components
import { Button } from '../../../../../components/Buttons'
import { Modal } from '../../../../../components/Modals';
import { InputField } from '../../../../../components/Inputs';
import { Dropdown } from '../../../../../components/Inputs';
// Helper functions
import { handleOneItemSelection } from '../../../../../components/SelectBox';
import { defaultOptions } from '../../../../../components/Inputs/Dropdown/defaultOptions';
// Style
import style from './TaskAssets.module.scss';
import { useState } from 'react';


export const AddAssetModal = () => {
  
  const [ asset, setAsset ] = useState<Array<string>>([]);
  const assetOptions = defaultOptions;
  
  return (
    <Modal
      modalBoxClasses={style.ModalBox}
      title="Adicionar ativo"
      isOpened={true}
      setIsOpened={()=>{}}
      buttons={[<Button text="Adicionar"/>]}
    >
      <InputField
        label="Categoria"
        gridArea="category"
        error={false}
        errorMessage={"Valor incorreto!"}
      >
        <Dropdown 
          options={assetOptions}
          selectionArray={asset}
          onSelectItem={handleOneItemSelection(setAsset)}
          boxWidth={250}
          sortItems={true}
        />
      </InputField>
    </Modal>
  )
}
