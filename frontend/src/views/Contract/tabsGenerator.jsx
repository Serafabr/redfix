import React from 'react';
import InfoTab from './TabsElements/InfoTab';
import MaterialTab from './TabsElements/MaterialTab';
import FilesTab from './TabsElements/FilesTab';
import TasksTab from './TabsElements/TasksTab';

export default function tabsGenerator(data) {
  return (
    [
      { id: 'info', title: 'Informações', element: <InfoTab data={data} /> },
      { id: 'resources', title: 'Suprimentos', element: <MaterialTab data={data} /> },
      { id: 'tasks', title: 'Tarefas', element: <TasksTab data={data} /> },
      { id: 'files', title: 'Arquivos', element: <FilesTab data={data} /> },
    ]
  );
}
