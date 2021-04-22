import { useMemo } from 'react';

const tasks = useMemo(
  () => [
    
  ], 
  []
);

const columnsTask = useMemo(
  () => [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Tarefa', accessor: 'task' },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Localização', accessor: 'place' },
    { Header: 'Prazo', accessor: 'dateEnd' },
  ], 
  []
);