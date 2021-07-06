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
import { OptionsType } from '../../../../../components/SelectBox/_types';

/*************************\
 * Custom types
\*************************/

export type AssetOptions = {
  data?: OptionsType,
  loading?: boolean,
  error?: ApolloError,
}

/*************************\
 * PropTypes
\*************************/

type Props = {
  assetOptions?: AssetOptions,
};

/*************************\
 * TaskAssets Component
\*************************/

export const TaskAssets = ({
  assetOptions,
}: Props) => {
  
  const [ assetModalOpen, setAssetModalOpen ] = useState(false);
  
  const handleOpenAssetModal = () => {
    setAssetModalOpen(true);
  }
  
  const data = useMemo(() => dataAssets, []);
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
        assetOptions={assetOptions}
      />
    </>
  )
}
