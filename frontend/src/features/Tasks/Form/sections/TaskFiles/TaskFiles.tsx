import { useMemo, useState } from 'react';
import { useTable } from 'react-table';
// Components
import { FormHeader, FormContent } from '../../../../../components/Forms';
import { Button } from '../../../../../components/Buttons';
import { AddFileModal } from './AddFileModal';
import { EmptyTable } from '../../../../../components/Tables/EmptyTable/EmptyTable';
// Helpers
import { columnsAssets, columnStyle } from './tableConfig';
import { dataFiles } from './fakeData';
// Style
import style from './TaskFiles.module.scss';
// Icons
import plusIcon from '../../../../../assets/icons/plus-blue.svg';
// Types
import { FormSituationType } from '../../../../../components/Forms/_types';
import { Table } from '../../../../../components/Tables';
import { ButtonType } from '../../../../../components/Buttons/_types';

export const TaskFiles = () => {
  
  const [ fileModalOpen, setFileModalOpen ] = useState(false);
  
  const handleOpenFileModal = () => {
    setFileModalOpen(true);
  }
  
  const data = useMemo(() => dataFiles, []);
  const columns = useMemo(() => columnsAssets, []);
  const table = useTable({ columns, data });
  
  return (
    <>
      <FormHeader
        title="Arquivos"
        subtitle="Adicione, a qualquer momento, arquivos relacionados a tarefa (memorandos, notas técnicas, notas fiscais, e-mails, ....)."
        step={4}
        totalSteps={4}
        button={<Button text="Adicionar arquivo" buttonType={ButtonType.Secondary} icon={plusIcon} onClick={handleOpenFileModal}/>}
      />
      <FormContent>
        <Table 
          data={table}
          columnStyle={columnStyle}
          smallTable
        />
      </FormContent>
      <AddFileModal 
        isOpen={fileModalOpen}
        setIsOpen={setFileModalOpen}
      />
    </>
  )
}
