import React from 'react';
import InfoTab from './TabsElements/InfoTab';
import SupplyTab from './TabsElements/SupplyTab';
import DispatchTab from './TabsElements/DispatchTab';
import AssetTab from './TabsElements/AssetTab';
import MessageTab from './TabsElements/MessageTab';
import FilesTab from './TabsElements/FilesTab';

export default function tabsGenerator(data) {
  return (
    [
      { id: 'info', title: 'Informações', element: <InfoTab data={data} /> },
      { id: 'resources', title: 'Suprimentos', element: <SupplyTab data={data} /> },
      { id: 'assets', title: 'Ativos', element: <AssetTab data={data} /> },
      { id: 'assignTo', title: 'Status / Tramitações', element: <DispatchTab data={data} /> },
      { id: 'messages', title: 'Histórico', element: <MessageTab data={data} /> },
      { id: 'files', title: 'Arquivos', element: <FilesTab data={data} /> },
    ]
  );
}
