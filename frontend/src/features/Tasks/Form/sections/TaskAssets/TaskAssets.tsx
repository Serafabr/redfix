import { useMemo } from 'react';
import { useTable } from 'react-table';
// Components
import { FormHeader, FormContent } from '../../../../../components/Forms';
import { PlainButton } from '../../../../../components/Buttons';
import { EmptyTable } from '../../../../../components/Tables/EmptyTable/EmptyTable';
// Helpers
import { columnsAssets, columnStyle } from './tableConfig';
import { dataAssets } from './fakedata';
// Style
import style from './TaskAssets.module.scss';
// Icons
import plusIcon from '../../../../../assets/icons/plus-blue.svg';
// Types
import { FormSituationType } from '../../../../../components/Forms/_types';
import { Table } from '../../../../../components/Tables';

export const TaskAssets = () => {
  
  const data = useMemo(() => dataAssets, []);
  const columns = useMemo(() => columnsAssets, []);
  
  const table = useTable({ columns, data });
  
  return (
    <>
      <FormHeader
        title="Ativos"
        subtitle="Adicione todos os ativos que serão objetos desta manutenção / serviço. Campo obrigatório. O usuário deverá anexar, pelo menos, UM ativo."
        situation={FormSituationType.Ok}
      />
      <FormContent marginBottom={true}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <PlainButton icon={plusIcon}>
            Adicionar Ativo
          </PlainButton>
        </div>
        <Table 
          data={table}
          columnStyle={columnStyle}
          smallTable
        />
      </FormContent>
    </>
  )
}
