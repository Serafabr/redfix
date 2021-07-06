// Components
import { Button } from '../../../../../components/Buttons'
import { Modal } from '../../../../../components/Modals';
import { InputField } from '../../../../../components/Inputs';
import { Dropdown } from '../../../../../components/Inputs';
// Helper functions
import { handleOneItemSelection } from '../../../../../components/SelectBox';
// Style
import style from './TaskAssets.module.scss';
import { useState } from 'react';
// Types
import { ButtonType } from '../../../../../components/Buttons/_types';
import { AssetOptions } from './TaskAssets'

/*************************\
 * PropTypes
\*************************/

type Props = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<boolean>,
  assetOptions?: AssetOptions,
};

/*************************\
 * AddAssetModal Component
\*************************/

export const AddAssetModal = ({
  isOpen,
  setIsOpen,
  assetOptions,
}: Props) => {
  
  const [ asset, setAsset ] = useState<Array<string>>([]);
  
  return (
    <Modal
      modalBoxClasses={style.ModalBox}
      title="Adicionar ativo"
      isOpened={isOpen}
      setIsOpened={setIsOpen}
      buttons={[ <Button text="Mapa Interativo" buttonType={ButtonType.Warning} />,<Button text="Adicionar"/>]}
    >
      <div className={style.ModalExplanation}>
        Ativo compreende de todo imóvel, área, dependência, sistema, subsistema ou equipamento que pode ser objeto de manutenção.
      </div>
      <div className={style.ModalInputs}>
        <InputField
          label="Selecionar ativo**"
          gridArea="asset"
          error={false}
          errorMessage={"Valor incorreto!"}
        >
          <Dropdown 
            options={assetOptions?.data}
            selectionArray={asset}
            onSelectItem={handleOneItemSelection(setAsset)}
            boxWidth={410}
            searchable={true}
            sortItems={true}
          />
        </InputField>
      </div>
      <div className={style.ModalEndExplanation}>
        ** A seleção pode ser realizada pelo mapa interativo do Senado Federal.
      </div>
    </Modal>
  )
}
