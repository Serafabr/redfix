import { useMemo } from 'react';
import { useTable } from 'react-table';
// Components
import { FormHeader, FormContent } from '../../../../../components/Forms';
import { Button } from '../../../../../components/Buttons';
import { EmptyTable } from '../../../../../components/Tables/EmptyTable/EmptyTable';
// Helpers
import { columnsAssets, columnStyle } from './tableConfig';
import { dataAssets } from './fakedata';
// Style
import style from './TaskFiles.module.scss';
// Icons
import plusIcon from '../../../../../assets/icons/plus-blue.svg';
// Types
import { FormSituationType } from '../../../../../components/Forms/_types';
import { Table } from '../../../../../components/Tables';
import { ButtonType } from '../../../../../components/Buttons/_types';

export const TaskFiles = () => {
  
  const data = useMemo(() => dataAssets, []);
  const columns = useMemo(() => columnsAssets, []);
  
  const table = useTable({ columns, data });
  
  return (
    <>
      <FormHeader
        title="Arquivos"
        subtitle="Adicione, a qualquer momento, arquivos relacionados a tarefa (memorandos, notas técnicas, notas fiscais, e-mails, ....)."
        situation={FormSituationType.Ok}
        button={<Button text="Adicionar arquivo" buttonType={ButtonType.Secondary} icon={plusIcon}/>}
      />
      <FormContent marginBottom={true}>
        <Table 
          data={table}
          columnStyle={columnStyle}
          smallTable
        />
      </FormContent>
    </>
  )
}
