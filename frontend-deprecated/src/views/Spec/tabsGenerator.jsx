import React from 'react';
import InfoTab from './TabsElements/InfoTab';
import ContractsTab from './TabsElements/ContractsTab';
import TasksTab from './TabsElements/TasksTab';
import FilesTab from './TabsElements/FilesTab';

export default function tabsGenerator(data) {
  return (
    [
      { id: 'info', title: 'Informações', element: <InfoTab data={data} /> },
      { id: 'contracts', title: 'Estoques', element: <ContractsTab data={data} /> },
      { id: 'tasks', title: 'Tarefas', element: <TasksTab data={data} /> },
      { id: 'file', title: 'Arquivos', element: <FilesTab data={data} /> },
    ]
  );
}
