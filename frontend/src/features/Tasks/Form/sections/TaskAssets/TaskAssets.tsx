import { useMemo, useState } from 'react';
import { useTable } from 'react-table';
// Components
import { FormHeader, FormContent } from '../../../../../components/Forms';
import { Table } from '../../../../../components/Tables';
import { EmptyTable } from '../../../../../components/Tables/EmptyTable/EmptyTable';
import { AddAssetModal } from './AddAssetModal';
import { Button } from '../../../../../components/Buttons';
// Helpers
import { columnsAssets, columnStyle } from './tableConfig';
import { dataAssets } from './fakedata';
// Style
import style from './TaskAssets.module.scss';
// Icons
import plusIcon from '../../../../../assets/icons/plus-blue.svg';
// Types
import { ApolloError } from '@apollo/client';
import { ButtonType } from '../../../../../components/Buttons/_types';
import { IdType, OptionsType } from '../../../../../components/SelectBox/_types';
import { AssetOptions } from '../../options/_types';

/*************************\
 * Custom types
\*************************/

export type QueryAssets = {
  data?: AssetOptions,
  loading?: boolean,
  error?: ApolloError,
}

/*************************\
 * PropTypes
\*************************/

type Props = {
  queryAssetOptions?: QueryAssets,
};

/*************************\
 * TaskAssets Component
\*************************/

export const TaskAssets = ({
  queryAssetOptions,
}: Props) => {
  
  const [ assetModalOpen, setAssetModalOpen ] = useState(false);
  const [ assets, setAssets ] = useState<Array<IdType>>([]); 
  
  // Open modal
  const handleOpenAssetModal = () => {
    setAssetModalOpen(true);
  }
  
  // Add new assets
  const handleAddAssets = (addedAssets: Array<IdType>) => {
    const newAssets = [...assets];
    // Check whether the asset is already on the list
    addedAssets.forEach((asset) => {
      if (!newAssets.includes(asset)) {
        newAssets.push(asset);
      }
    })
    // Add assets
    setAssets(newAssets);
  }
  
  console.log('assets');
  console.log(assets);
  console.log(queryAssetOptions);
  
  const data = useMemo(() => (
    assets.map((rowId: IdType) => (
      {
        id: rowId,
        assetSf: queryAssetOptions?.data && queryAssetOptions?.data[rowId].assetSf,
        asset: queryAssetOptions?.data && queryAssetOptions?.data[rowId].name,
        category: queryAssetOptions?.data && queryAssetOptions?.data[rowId].category,
      }
    ))
  ), [assets, queryAssetOptions]);
  
  const columns = useMemo(() => columnsAssets, []);
  
  
  const table = useTable({ columns, data });
  
  return (
    <>
      <FormHeader
        title="Ativos"
        subtitle="Adicione todos os ativos que serão objetos desta manutenção / serviço. Campo obrigatório. O usuário deverá anexar, pelo menos, UM ativo."
        step={3}
        totalSteps={4}
        button={<Button text="Adicionar ativo" buttonType={ButtonType.Secondary} icon={plusIcon} onClick={handleOpenAssetModal}/>}
      />
      <FormContent marginBottom={true}>
        <Table 
          data={table}
          columnStyle={columnStyle}
          smallTable
        />
      </FormContent>
      <AddAssetModal 
        isOpen={assetModalOpen}
        setIsOpen={setAssetModalOpen}
        assetOptions={queryAssetOptions}
        addNewAsset={handleAddAssets}
      />
    </>
  )
}
